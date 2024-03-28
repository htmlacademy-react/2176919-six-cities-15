import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './slices/user';
import { offersSlice } from './slices/offers';
import { offerSlice } from './slices/offer';
import { NameSpace } from '../utils/constants';
import { favoritesSlice } from './slices/favorites';

export const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.Offer]: offerSlice.reducer,
  [NameSpace.Favorites]: favoritesSlice.reducer,
});
