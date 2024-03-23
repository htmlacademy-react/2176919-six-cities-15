import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { OfferData } from '../types/offers';
import { OfferNearby } from '../types/offers-nearby';
import { OfferDetailed } from '../types/offer';
import { ReviewData } from '../types/reviews';
import { setReviews, setError } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute } from '../utils/constants';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { NameSpace } from '../utils/constants';
import { store } from './';

const TIMEOUT_SHOW_ERROR = 2000;

type AsyncThunkConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, AsyncThunkConfig>(
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

export const fetchSelectOffer = createAsyncThunk<void, { offerId: string }, AsyncThunkConfig>(
  `${NameSpace.User}/setOffer`,
  async ({offerId}, {extra: api}) => {
    const {data} = await api.get<OfferDetailed>(`${APIRoute.Offers}/${offerId}`);
    return data;
  },
);

export const fetchOffersNearby = createAsyncThunk<void, { offerId: string }, AsyncThunkConfig>(
  `${NameSpace.User}/setOffersNearby`,
  async ({offerId}, {extra: api}) => {
    const {data} = await api.get<OfferNearby[]>(`${APIRoute.Offers}/${offerId}${APIRoute.OffersNearby}`);
    return data;
  },
);

export const fetchReviews = createAsyncThunk<void, { offerId: string }, AsyncThunkConfig>(
  'setReviews',
  async ({offerId}, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewData[]>(`${APIRoute.Reviews}/${offerId}`);
    dispatch(setReviews(data));
  },
);

export const reviewAction = createAsyncThunk<void, {
    offerId: string;
    comment: string;
    rating: number;
  }, AsyncThunkConfig>(
    'sendingReview',
    async (_arg, {extra: api}) => {
      const {offerId, comment, rating} = _arg;
      await api.post(`${APIRoute.Reviews}/${offerId}`, {comment, rating});
    },
  );
