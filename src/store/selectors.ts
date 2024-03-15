import { sortOffers } from '../utils/sorting';

import { State } from '../types/state';

export const selectedCitySelector = (state: State) => state.city;

export const selectedOffersByCity = (state: State) => state.offers.filter((offer) => offer.city.name === state.city);

export const sortedOffersSelector = (state: State) => sortOffers(state.sorting, selectedOffersByCity(state));

export const selectedCityLocation = (state: State) => selectedOffersByCity(state)[0].city;

export const pointsOffersByCity = (state: State) => selectedOffersByCity(state).map((offer) => ({id: offer.id, latitude: offer.location.latitude, longitude: offer.location.longitude, zoom: offer.location.zoom}));
