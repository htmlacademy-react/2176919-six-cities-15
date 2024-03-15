import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import { useAppSelector } from '../hooks';
import { selectedCityLocation, pointsOffersByCity } from '../store/selectors';
import useMap from '../hooks/use-map';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import classNames from 'classnames';

export type Point = {
  id: string;
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Points = Point[];

const defaultCustomIcon = new Icon({
  iconUrl: '../img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [27, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: '../img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [27, 39]
});

type MapProps = {
  isMain: boolean;
  selectedPoint?: Point | undefined;
};

function Map(props: MapProps): JSX.Element {
  const {isMain, selectedPoint} = props;
  const city = useAppSelector(selectedCityLocation);
  const points = useAppSelector(pointsOffersByCity);

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markerLayer = leaflet.layerGroup();

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [city, map]);

  useEffect(() => {
    if (map) {
      markerLayer.addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint, markerLayer]);

  return (
    <section className={classNames(
      'map',
      {'cities__map': isMain},
      {'offer__map': !isMain}
    )} ref={mapRef}
    >
    </section>
  );
}

export default Map;
