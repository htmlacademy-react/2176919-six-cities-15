import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import ErrorMessage from './pages/main/components/error-message/error-message';
import {Provider} from 'react-redux';
import { offers } from './mocks/offers';
import { offer } from './mocks/offer';
import { reviews } from './mocks/reviews';
import { offersNearby } from './mocks/offers-nearby';
import { store } from './store';
import { fetchOfferAction, checkAuthAction } from './store/api-actions';

store.dispatch(fetchOfferAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App offers={offers} reviews={reviews} offer={offer} offersNearby={offersNearby} />
    </Provider>
  </React.StrictMode>
);
