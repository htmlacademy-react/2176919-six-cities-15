import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Point } from '../../components/map';
import {useAppSelector} from '../../hooks';
import { selectedCitySelector, sortedOffersSelector } from '../../store/selectors';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map';
import PlacesOption from './components/places-option';
import CitiesList from '../../components/cities-list/cities-list';

const SORTING_TYPES = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'] as const;

export type Sorting = typeof SORTING_TYPES[number]

function Main(): JSX.Element {
  const selectedCity = useAppSelector(selectedCitySelector);
  const selectedOffers = useAppSelector(sortedOffersSelector);

  const points = selectedOffers.map((offer) => ({id: offer.id, latitude: offer.location.latitude, longitude: offer.location.longitude, zoom: offer.location.zoom}));

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined
  );

  const handleListItemHover = (listItemId: string) => {
    const currentPoint = points.find((point) => point.id === listItemId);

    setSelectedPoint(currentPoint);
  };

  return (
    <main className="page__main page__main--index">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">

            <CitiesList isTabs/>

          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{selectedOffers.length} places to stay in {selectedCity}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                {SORTING_TYPES.map((option) => <PlacesOption option={option} key={option}/>)}
              </ul>
            </form>
            {<OffersList variant={'vertical'} onListItemHover={handleListItemHover}/>}
          </section>
          <div className="cities__right-section">
            {<Map city={selectedOffers[0]?.city} points={points} isMain selectedPoint={selectedPoint}/>}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
