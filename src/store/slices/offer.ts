import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/constants';
import { OfferSlice } from '../../types/state';
import { fetchSelectOffer, fetchOffersNearby, fetchReviews } from '../api-actions';
import { RequestStatus } from '../../utils/constants';

const initialState: OfferSlice = {
  offer: null,
  offersNearby: [],
  reviews: [],
  status: RequestStatus.Idle,
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
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchSelectOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchOffersNearby.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchOffersNearby.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchReviews.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.status = RequestStatus.Success;
      });
  }
});

export const {dropOffer} = offerSlice.actions;
