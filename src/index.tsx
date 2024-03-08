import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import { offers } from './mocks/offers';
import { offer } from './mocks/offer';
import { reviews } from './mocks/reviews';
import { offersNearby } from './mocks/offers-nearby';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} reviews={reviews} offer={offer} offersNearby={offersNearby} />
    </Provider>
  </React.StrictMode>
);
