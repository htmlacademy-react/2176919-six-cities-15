import {createReducer} from '@reduxjs/toolkit';
import {setCity, setOffers, setSorting, loadOffers, requireAuthorization} from './action';
import { City } from '../components/cities-list/cities-list';
import { Sorting } from '../pages/main/main';
import { OfferData } from '../mocks/offers';
import { AuthorizationStatus } from '../utils/constants';

type InitialState = {
  city: City;
  sorting: Sorting;
  offers: OfferData[];
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  sorting: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
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
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
