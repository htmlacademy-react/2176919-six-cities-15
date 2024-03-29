import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import Footer from '../../components/footer/footer';
import OffersList from '../../components/offers-list/offers-list';
import { getOffersNearby } from '../../store/selectors';

function Favorites (): JSX.Element {
  const offers = useAppSelector(getOffersNearby);
  return (
    <>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <Helmet>
              <title>6 cities: favorites</title>
            </Helmet>
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                {<OffersList offers={offers} variant={'horizontal'} />}
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Favorites;
