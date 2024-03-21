import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Point } from '../../components/map';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { selectedCitySelector, sortedOffersSelector, pointsOffersByCity, selectSorting} from '../../store/selectors';
import { setSorting } from '../../store/action';
import { Sorting } from './components/places-options';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map';
import PlacesOptions from './components/places-options';
import CitiesList from '../../components/cities-list/cities-list';

function Main(): JSX.Element {
  const selectedCity = useAppSelector(selectedCitySelector);
  const selectedOffers = useAppSelector(sortedOffersSelector);
  const sorting: Sorting = useAppSelector(selectSorting);
  const points = useAppSelector(pointsOffersByCity);
  const dispatch = useAppDispatch();

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined
  );

  const handleListItemHover = (listItemId: string) => {
    const currentPoint = points.find((point) => point.id === listItemId);

    setSelectedPoint(currentPoint);
  };

  const handleSorting = (evt: React.MouseEvent<HTMLElement>) => {
    const value = (evt.target as HTMLElement).textContent;
    if (value) {
      dispatch(setSorting(value as Sorting));
    }
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
            <PlacesOptions
              sorting={sorting}
              onChange={handleSorting}
            />
            {<OffersList offers={selectedOffers} variant={'vertical'} onListItemHover={handleListItemHover}/>}
          </section>
          <div className="cities__right-section">
            {<Map isMain selectedPoint={selectedPoint}/>}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
