import { Helmet } from 'react-helmet-async';
import { CITIES } from '../../utils/constants';
import { OfferData } from '../../mocks/offers';
import OffersList from '../../components/offers-list/offers-list';
import Location from './components/location';
import Map from './components/map';

type MainProps = {
  offersCount: number;
  offers: OfferData[];
}

function Main({ offersCount, offers }: MainProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">

            {CITIES.map((city) => <Location city={city} key={city} />)}

          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            {<OffersList offersCount={offersCount} offers={offers} />}
          </section>

          <Map />

        </div>
      </div>
    </main>
  );
}

export default Main;
