import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/constants';
import { OffersSlice } from '../../types/state';
import { fetchOffersAction } from '../api-actions';

const initialState: OffersSlice = {
  city: 'Paris',
  sorting: 'Popular',
  offers: [],
  isOffersDataLoading: false,
  hasError: false,
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction) => {
      state.city = action.payload;
    },
    setSorting: (state, action: PayloadAction) => {
      state.sorting = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      });
  }
});

export const {setCity, setSorting} = offersSlice.actions;
