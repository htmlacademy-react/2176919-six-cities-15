import {createAction} from '@reduxjs/toolkit';
import { City } from '../components/cities-list/cities-list';
import { Sorting } from '../pages/main/main';

export const cityChange = createAction<City>('cityChange');
export const fillingListOffers = createAction('fillingListOffers');
export const changeSorting = createAction<Sorting>('changeSorting');

