import { sortOffers } from '../utils/sorting';

import { State } from '../types/state';

export const selectedCitySelector = (state: State) => state.city;

export const selectedOffersByCity = (state: State) => state.offers.filter((offer) => offer.city.name === state.city);

export const sortedOffersSelector = (state: State) => sortOffers(state.sorting, selectedOffersByCity(state));
