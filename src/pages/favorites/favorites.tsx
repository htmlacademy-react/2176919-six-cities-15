import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getFavoriteOffers } from '../../store/selectors';
import { fetchFavoriteOffers } from '../../store/api-actions';
import Footer from '../../components/footer/footer';
import FavoritesEmpty from './favorites-empty';
import FavoritesListItem from './components/favorites-list-item';

function Favorites (): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [dispatch]);

  const offers = useAppSelector(getFavoriteOffers);

  if (offers.length === 0) {
    return (
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <FavoritesEmpty />
          <Footer />
        </div>
      </main>
    );
  }

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
              {
                offers.map((item) => <FavoritesListItem title={item.city} key={item.city} offers={item.offers}/>)
              }
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Favorites;
