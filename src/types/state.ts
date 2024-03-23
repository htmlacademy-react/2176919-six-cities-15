import { store } from '../store';
import { AuthorizationStatus } from '../utils/constants';
import { OfferData } from './offers';
import { City } from '../components/cities-list/cities-list';
import { Sorting } from '../pages/main/components/places-options';
import { OfferDetailed } from './offer';
import { ReviewData } from './reviews';
import { OfferNearby } from './offers-nearby';

export type UserSlice = {
  authorizationStatus: AuthorizationStatus;
};

export type OffersSlice = {
  city: City;
  sorting: Sorting;
  offers: OfferData[];
  isOffersDataLoading: boolean;
  hasError: boolean;
};

export type OfferSlice = {
  offer: OfferDetailed | null;
  offersNearby: OfferNearby[];
  reviews: ReviewData[];
  isOfferLoading: boolean;
  isOffersNearbyLoading: boolean;
};


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
