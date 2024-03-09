import {createAction} from '@reduxjs/toolkit';
import { City } from '../components/cities-list/cities-list';

export const cityChange = createAction<City>('cityChange');
export const fillingListOffers = createAction('fillingListOffers');
