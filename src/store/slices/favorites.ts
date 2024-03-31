import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/constants';
import { FavoritesSlice } from '../../types/state';
import { fetchFavoriteOffers, favoriteAction } from '../api-actions';
import { RequestStatus } from '../../utils/constants';
import { toggleFavorite } from '../../utils/toggle-favorite';

const initialState: FavoritesSlice = {
  offersFavorite: [],
  status: RequestStatus.Idle,
  favoriteOffer: {},
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
      })
      .addCase(favoriteAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(favoriteAction.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        //state.favoriteOffer = action.payload;
        toggleFavorite(state, action.payload);
      })
      .addCase(favoriteAction.rejected, (state) => {
        state.status = RequestStatus.Error;
      });
  }
});
