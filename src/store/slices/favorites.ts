import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/constants';
import { FavoritesSlice } from '../../types/state';
import { fetchFavoriteOffers } from '../api-actions';
import { RequestStatus } from '../../utils/constants';

const initialState: FavoritesSlice = {
  offersFavorite: [],
  offersFavoriteLoadingStatus: RequestStatus.Idle,
  status: RequestStatus.Idle,
};

export const favoritesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.offersFavorite = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchFavoriteOffers.rejected, (state) => {
        state.status = RequestStatus.Error;
      });
  }
});
