import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './slices/user';
import { offersSlice } from './slices/offers';
import { offerSlice } from './slices/offer';
import { NameSpace } from '../utils/constants';

export const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.Offer]: offerSlice.reducer,
});
