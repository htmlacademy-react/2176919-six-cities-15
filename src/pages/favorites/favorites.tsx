import { Helmet } from 'react-helmet-async';
import { OfferData } from '../../mocks/offers';
import Footer from '../../components/footer/footer';
import OffersList from '../../components/offers-list/offers-list';

type FavoritesProps = {
  offersCount: number;
  offers: OfferData[];
}

function Favorites ({offersCount, offers}: FavoritesProps): JSX.Element {
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
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>

                {<OffersList offersCount={offersCount} offers={offers} />}

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
