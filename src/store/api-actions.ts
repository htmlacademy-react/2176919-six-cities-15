import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { OfferData } from '../types/offers';
import { OfferNearby } from '../types/offers-nearby';
import { OfferDetailed } from '../types/offer';
import { setOffers, setOffer, setOffersNearby, requireAuthorization, setError, setOffersDataLoadingStatus } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AuthorizationStatus } from '../utils/constants';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { store } from './';

const TIMEOUT_SHOW_ERROR = 2000;

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'setOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OfferData[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(setOffers(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const fetchSelectOffer = createAsyncThunk<void, { offerId: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'setOffer',
  async ({offerId}, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferDetailed>(`${APIRoute.Offers}/${offerId}`);
    dispatch(setOffer(data));
  },
);

export const fetchOffersNearby = createAsyncThunk<void, { offerId: string }, {
  offerId: string;
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'setOffersNearby',
  async ({offerId}, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferNearby[]>(`${APIRoute.Offers}/${offerId}${APIRoute.OffersNearby}`);
    dispatch(setOffersNearby(data));
  },
);
