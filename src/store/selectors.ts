import { sortOffers } from '../utils/sorting';
import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { sortReview } from '../utils/sorting';
import { NameSpace } from '../utils/constants';

export const selectedCitySelector = (state: State) => state[NameSpace.Offers].city;

export const selectSorting = (state: State) => state[NameSpace.Offers].sorting;

export const selectedOffersByCity = (state: State) => state[NameSpace.Offers].offers.filter((offer) => offer.city.name === state[NameSpace.Offers].city);

export const sortedOffersSelector = createSelector(
  selectSorting,
  selectedOffersByCity,
  (sorting, selectedOffers) => sortOffers(sorting, selectedOffers)
);

export const selectedCityLocation = (state: State) => selectedOffersByCity(state)[0].city;

export const pointsOffersByCity = createSelector(
  selectedOffersByCity,
  (offers) => offers.map((offer) => ({id: offer.id, latitude: offer.location.latitude, longitude: offer.location.longitude, zoom: offer.location.zoom}))
);

export const getAuthorizationStatus = (state: State) => state[NameSpace.User].authorizationStatus;

export const getIsOffersDataLoading = (state: State) => state[NameSpace.Offers].offersLoadingStatus;

export const selectedOffer = (state: State) => state[NameSpace.Offer].offer;

export const pointSelected = createSelector(
  selectedOffer,
  (offer) => ({id: offer?.id, latitude: offer?.location.latitude, longitude: offer?.location.longitude, zoom: offer?.location.zoom})
);

export const getOffersNearby = (state: State) => state[NameSpace.Offer].offersNearby;

export const getReviews = (state: State) => state[NameSpace.Offer].reviews;

export const getSortedReviews = createSelector(
  getReviews,
  (reviews) => sortReview(reviews)
);
