import { sortOffers } from '../utils/sorting';
import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { sortReviewByDate } from '../utils/sorting';

export const selectedCitySelector = (state: State) => state.city;

export const selectSorting = (state: State) => state.sorting;

export const selectedOffersByCity = (state: State) => state.offers.filter((offer) => offer.city.name === state.city);

export const sortedOffersSelector = createSelector(
  selectSorting,
  selectedOffersByCity,
  (sorting, selectedOffers) => sortOffers(sorting, selectedOffers)
);

export const selectedCityLocation = (state: State) => selectedOffersByCity(state)[0].city;

export const pointsOffersByCity = createSelector(
  selectedOffersByCity,
  (offers) => offers.map((offer) => ({id: offer.id, latitude: offer.location.latitude, longitude: offer.location.longitude, zoom: offer.location.zoom})));

export const getAuthorizationStatus = (state: State) => state.authorizationStatus;

export const getIsOffersDataLoading = (state: State) => state.isOffersDataLoading;

export const selectedOffer = (state: State) => state.offer;

export const pointSelected = createSelector(
  selectedOffer,
  (offer) => ({id: offer?.id, latitude: offer?.location.latitude, longitude: offer?.location.longitude, zoom: offer?.location.zoom})
);

export const getOffersNearby = (state: State) => state.offersNearby;

export const getReviews = (state: State) => state.reviews;
