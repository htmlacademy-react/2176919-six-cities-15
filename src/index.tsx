import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Settings } from './mocks/offers';
import { offers } from './mocks/offers';
import { offer } from './mocks/offer';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersCount={Settings.OffersCount} offers={offers} reviews={reviews} offer={offer} />
  </React.StrictMode>
);
