import {createReducer} from '@reduxjs/toolkit';
import {cityChange, fillingListOffers, changeSorting} from './action';
import { City } from '../components/cities-list/cities-list';
import { Sorting } from '../pages/main/main';

type InitialState = {
  city: City;
  sorting: Sorting;
}

const initialState: InitialState = {
  city: 'Paris',
  sorting: 'Popular',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillingListOffers, (state) => state)
    .addCase(changeSorting, (state, action) => {
      state.sorting = action.payload;
    });
});

export {reducer};
