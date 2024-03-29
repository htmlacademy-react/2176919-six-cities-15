import { store } from '../store';
import { AuthorizationStatus } from '../utils/constants';
import { OfferData } from './offers';
import { City } from '../components/cities-list/cities-list';
import { Sorting } from '../pages/main/components/places-options';
import { OfferDetailed } from './offer';
import { ReviewData } from './reviews';
import { OfferNearby } from './offers-nearby';
import { RequestStatus, FavoriteStatus } from '../utils/constants';

export type UserSlice = {
  authorizationStatus: AuthorizationStatus;
  loginLoadingStatus: RequestStatus;
};

export type OffersSlice = {
  city: City;
  sorting: Sorting;
  offers: OfferData[];
  offersLoadingStatus: RequestStatus;
  error: string | null;
}

export type OfferSlice = {
  offer: OfferDetailed | null;
  offersNearby: OfferNearby[];
  reviews: ReviewData[];
  status: RequestStatus;
};

export type FavoritesSlice = {
  offersFavorite: OfferData[];
  status: RequestStatus;
}


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
