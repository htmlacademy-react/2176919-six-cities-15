import {createAction} from '@reduxjs/toolkit';
import { City } from '../components/cities-list/cities-list';
import { Sorting } from '../pages/main/main';
import { OfferData } from '../mocks/offers';
import { AuthorizationStatus } from '../utils/constants';

export const setCity = createAction<City>('setCity');

export const setOffers = createAction<OfferData[]>('setOffers');

export const setSorting = createAction<Sorting>('setSorting');

export const setOffersDataLoadingStatus = createAction<boolean>('setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setError = createAction<string | null>('setError');
