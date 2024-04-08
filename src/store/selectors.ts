import { sortOffers } from '../utils/sorting';
import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { sortReview } from '../utils/sorting';
import { NameSpace } from '../utils/constants';
import { getFavoritesByCity } from '../utils/filtration';

const OFFERS_NEARBY_COUNT = 3;

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

export const getLoginLoadingStatus = (state: State) => state[NameSpace.User].loginLoadingStatus;

export const getUser = (state: State) => state[NameSpace.User].user;

export const getIsOffersDataLoading = (state: State) => state[NameSpace.Offers].offersLoadingStatus;

export const selectedOffer = (state: State) => state[NameSpace.Offer].offer;

export const statusOffer = (state: State) => state[NameSpace.Offer].status;

export const statusReviewSending = (state: State) => state[NameSpace.Offer].reviewSendingStatus;

export const pointSelected = createSelector(
  selectedOffer,
  (offer) => ({id: offer?.id, latitude: offer?.location.latitude, longitude: offer?.location.longitude, zoom: offer?.location.zoom})
);

export const getOffersNearby = createSelector(
  (state: State) => state[NameSpace.Offer].offersNearby,
  (offers) => offers.slice(0, OFFERS_NEARBY_COUNT));

export const getReviews = (state: State) => state[NameSpace.Offer].reviews;

export const getSortedReviews = createSelector(
  getReviews,
  (reviews) => sortReview(reviews)
);

export const getFavoriteOffers = createSelector(
  (state: State) => state[NameSpace.Favorites].offersFavorite,
  (offers) => getFavoritesByCity(offers)
);

export const getFavoritesAll = (state: State) => state[NameSpace.Favorites].offersFavorite;

export const getFavoritesQuantity = createSelector(
  (state: State) => state[NameSpace.Favorites].offersFavorite,
  (favorite) => favorite.length
);

export const getLoadingFavoriteStatus = (state: State) => state[NameSpace.Favorites].status;
