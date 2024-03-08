import {createReducer} from '@reduxjs/toolkit';
import {cityChange, fillingListOffers} from './action';

const initialState = {
  city: 'Paris',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state) => state)
    .addCase(fillingListOffers, (state) => state);
});

export {reducer};
