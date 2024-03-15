import { OfferDetailed } from '../../mocks/offer';
import { ReviewData } from '../../mocks/reviews';
import { OfferNearby } from '../../mocks/offers-nearby';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../utils/constants';
import { getAuthorizationStatus, getIsOffersDataLoading } from '../../store/selectors';
import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import NotFound from '../../pages/not-found/not-found';
import Offer from '../../pages/offer/offer';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import Loader from '../loader/loader';

type AppProps = {
  reviews: ReviewData[];
  offer: OfferDetailed;
  offersNearby: OfferNearby[];
}

function App({ reviews, offer, offersNearby }: AppProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(getIsOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <Loader />
    );
  }
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Layout />}
          >
            <Route
              index
              element={<Main />}
            />
            <Route
              path={AppRoute.Login}
              element={<Login />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute
                  authorizationStatus={authorizationStatus}
                >
                  <Favorites />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={<Offer offer={offer} reviews={reviews} offersNearby={offersNearby}/>}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
