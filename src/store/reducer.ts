import {createReducer} from '@reduxjs/toolkit';
import {cityChange, fillingListOffers} from './action';
import { City } from '../components/cities-list/cities-list';

type InitialState = {
  city: City;
}

const initialState: InitialState = {
  city: 'Paris',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillingListOffers, (state) => state);
});

export {reducer};
