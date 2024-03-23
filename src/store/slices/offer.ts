import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/constants';
import { OfferSlice } from '../../types/state';
import { fetchSelectOffer, fetchOffersNearby } from '../api-actions';

const initialState: OfferSlice = {
  offer: null,
  offersNearby: [],
  reviews: [],
  isOfferLoading: false,
  isOffersNearbyLoading: false,
};

export const offerSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    dropOffer: (state) => {
      state.offer = null;
      state.offersNearby = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSelectOffer.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchSelectOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferLoading = false;
      })
      .addCase(fetchOffersNearby.pending, (state) => {
        state.isOffersNearbyLoading = true;
      })
      .addCase(fetchOffersNearby.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
        state.isOffersNearbyLoading = false;
      });
  }
});

export const {dropOffer} = offerSlice.actions;
