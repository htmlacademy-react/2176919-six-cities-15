import {createReducer} from '@reduxjs/toolkit';
import {setCity, setOffers, setSorting} from './action';
import { City } from '../components/cities-list/cities-list';
import { Sorting } from '../pages/main/main';
import { OfferData } from '../mocks/offers';
import { offers } from '../mocks/offers';

type InitialState = {
  city: City;
  sorting: Sorting;
  offers: OfferData[];
}

const initialState: InitialState = {
  city: 'Paris',
  offers: offers,
  sorting: 'Popular',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    });
});

export {reducer};
