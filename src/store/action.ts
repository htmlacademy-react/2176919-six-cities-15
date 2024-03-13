import {createAction} from '@reduxjs/toolkit';
import { City } from '../components/cities-list/cities-list';
import { Sorting } from '../pages/main/main';
import { OfferData } from '../mocks/offers';

export const setCity = createAction<City>('setCity');
export const setOffers = createAction<OfferData[]>('setOffers');
export const setSorting = createAction<Sorting>('setSorting');

