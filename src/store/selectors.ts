import { sortOffers } from '../utils/sorting';

import { State } from '../types/state';

export const selectedCitySelector = (state: State) => state.city;

export const sortedOffersSelector = (state: State) => {
  const selectedOffersByCity = state.offers.filter((offer) => offer.city.name === state.city);
  return sortOffers(state.sorting, selectedOffersByCity);
};
