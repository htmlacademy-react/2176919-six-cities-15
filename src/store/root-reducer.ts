import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../utils/constants';
import { offersSlice } from './slices/offers';
import { offerSlice } from './slices/offer';
import { userSlice } from './slices/user';

export const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.Offer]: offerSlice.reducer,
});
