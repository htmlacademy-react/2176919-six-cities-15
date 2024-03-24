import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../utils/constants';
import { userSlice } from './slices/user';
import { offersSlice } from './slices/offers';
import { offerSlice } from './slices/offer';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.Offer]: offerSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
});
