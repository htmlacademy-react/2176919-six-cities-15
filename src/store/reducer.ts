import {createReducer} from '@reduxjs/toolkit';
import {setReviews, setError } from './action';
import { ReviewData } from '../types/reviews';

type InitialState = {
  reviews: ReviewData[];
  error: string | null;
}

const initialState: InitialState = {
  reviews: [],
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
