import { store } from '../store';
import { AuthorizationStatus } from '../utils/constants';
import { OfferData } from './offers';
import { City } from '../utils/cities';
import { Sorting } from '../utils/sorting-types';
import { OfferDetailed } from './offer';
import { ReviewData } from './reviews';
import { OfferNearby } from './offers-nearby';
import { RequestStatus } from '../utils/constants';
import { User } from './user-data';

export type UserSlice = {
  user: User;
  authorizationStatus: AuthorizationStatus;
  loginLoadingStatus: RequestStatus;
};

export type OffersSlice = {
  city: City;
  sorting: Sorting;
  offers: OfferData[];
  offersLoadingStatus: RequestStatus;
}

export type OfferSlice = {
  offer: OfferDetailed | null;
  offersNearby: OfferNearby[];
  reviews: ReviewData[];
  status: RequestStatus;
  reviewSendingStatus: RequestStatus;
};

export type FavoritesSlice = {
  offersFavorite: OfferData[];
  status: RequestStatus;
}


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
