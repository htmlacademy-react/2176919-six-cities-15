import { sortOffers } from '../utils/sorting';
import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { sortReview } from '../utils/sorting';
import { NameSpace } from '../utils/constants';

export const selectedCitySelector = (state: State) => state[NameSpace.Offers].city;

export const selectSorting = (state: State) => state[NameSpace.Offers].sorting;

export const sortedOffersSelector = createSelector(
  (state: State) => state[NameSpace.Offers].sorting,
  (state: State) => state[NameSpace.Offers].offers,
  (state: State) => state[NameSpace.Offers].city,
  (sorting, offers, city) => {
    const selectedOffers = offers.filter((offer) => offer.city.name === city);
    return sortOffers(sorting, selectedOffers);
  }
);

export const selectedCityLocation = createSelector(
  (state: State) => state[NameSpace.Offers].offers,
  (state: State) => state[NameSpace.Offers].city,
  (offers, city) => {
    const selectedOffers = offers.filter((offer) => offer.city.name === city);
    return selectedOffers[0].city;
  }
);

export const pointsOffersByCity = createSelector(
  (state: State) => state[NameSpace.Offers].offers,
  (state: State) => state[NameSpace.Offers].city,
  (offers, city) => {
    const selectedOffers = offers.filter((offer) => offer.city.name === city);
    return selectedOffers.map((offer) => ({id: offer.id, latitude: offer.location.latitude, longitude: offer.location.longitude, zoom: offer.location.zoom}));
  }
);

export const getAuthorizationStatus = (state: State) => state[NameSpace.User].authorizationStatus;

export const getIsOffersDataLoading = (state: State) => state[NameSpace.Offers].offersLoadingStatus;

export const selectedOffer = (state: State) => state[NameSpace.Offer].offer;

export const statusOffer = (state: State) => state[NameSpace.Offer].status;

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

export const setError = (state: State) => state[NameSpace.Offers].error;

export const getFavoriteOffers = (state: State) => state[NameSpace.Favorites].offersFavorite;
