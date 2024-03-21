import {createReducer} from '@reduxjs/toolkit';
import {setCity, setSorting, setOffers, setOffer, setReviews, requireAuthorization, setOffersDataLoadingStatus, setError, setOffersNearby, dropOffer } from './action';
import { City } from '../components/cities-list/cities-list';
import { Sorting } from '../pages/main/components/places-options';
import { OfferData } from '../types/offers';
import { OfferDetailed } from '../types/offer';
import { ReviewData } from '../types/reviews';
import { OfferNearby } from '../types/offers-nearby';
import { AuthorizationStatus } from '../utils/constants';

type InitialState = {
  city: City;
  sorting: Sorting;
  offers: OfferData[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  offer: OfferDetailed | null;
  offersNearby: OfferNearby[];
  reviews: ReviewData[];
  error: string | null;
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  sorting: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  offer: null,
  offersNearby: [],
  reviews: [],
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.offersNearby = [];
    })
    .addCase(setOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
