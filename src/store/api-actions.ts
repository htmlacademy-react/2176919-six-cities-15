import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { OfferNearby } from '../types/offers-nearby';
import { OfferDetailed } from '../types/offer';
import { OfferData } from '../types/offers';
import { ReviewData } from '../types/reviews';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, NameSpace, FavoriteStatus } from '../utils/constants';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { FavoriteOfferDetailed } from '../types/favorite-offer';

type AsyncThunkConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export const fetchOffersAction = createAsyncThunk<OfferData[], undefined, AsyncThunkConfig>(
  `${NameSpace.Offers}/setOffers`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferData[]>(APIRoute.Offers);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  }
);

export const loginAction = createAsyncThunk<void, AuthData, AsyncThunkConfig>(
  `${NameSpace.User}/login`,
  async ({login: email, password}, {extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
  },
);

export const logoutAction = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  `${NameSpace.User}/logout`,
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchSelectOffer = createAsyncThunk<OfferDetailed, { offerId: string }, AsyncThunkConfig>(
  `${NameSpace.User}/getOffer`,
  async ({offerId}, {extra: api}) => {
    const {data} = await api.get<OfferDetailed>(`${APIRoute.Offers}/${offerId}`);
    return data;
  },
);

export const fetchOffersNearby = createAsyncThunk<OfferNearby[], { offerId: string }, AsyncThunkConfig>(
  `${NameSpace.User}/getOffersNearby`,
  async ({offerId}, {extra: api}) => {
    const {data} = await api.get<OfferNearby[]>(`${APIRoute.Offers}/${offerId}${APIRoute.OffersNearby}`);
    return data;
  },
);

export const fetchReviews = createAsyncThunk<ReviewData[], { offerId: string }, AsyncThunkConfig>(
  `${NameSpace.User}/setReviews`,
  async ({offerId}, {extra: api}) => {
    const {data} = await api.get<ReviewData[]>(`${APIRoute.Reviews}/${offerId}`);
    return data;
  },
);

export const reviewAction = createAsyncThunk<void, {
    offerId: string;
    comment: string;
    rating: number;
  }, AsyncThunkConfig>(
    `${NameSpace.Offer}/sendingReview`,
    async (_arg, {extra: api}) => {
      const {offerId, comment, rating} = _arg;
      await api.post(`${APIRoute.Reviews}/${offerId}`, {comment, rating});
    },
  );

export const fetchFavoriteOffers = createAsyncThunk<OfferData[], undefined, AsyncThunkConfig>(
  `${NameSpace.Favorites}/setFavoriteOffers`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferData[]>(APIRoute.Favorites);
    return data;
  },
);

export const favoriteAction = createAsyncThunk<FavoriteOfferDetailed, {
  offerId: string;
  isFavorite: FavoriteStatus;
}, AsyncThunkConfig>(
  `${NameSpace.Favorites}/setFavorite`,
  async (arg, {extra: api}) => {
    const {offerId, isFavorite} = arg;
    const {data} = await api.post<FavoriteOfferDetailed>(`${APIRoute.Favorites}/${offerId}/${isFavorite}`);
    return data;
  },
);
