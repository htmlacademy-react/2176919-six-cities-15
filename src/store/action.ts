import {createAction} from '@reduxjs/toolkit';
import { City } from '../components/cities-list/cities-list';
import { Sorting } from '../pages/main/main';
import { OfferData } from '../types/offers';
import { OfferDetailed } from '../types/offer';
import { OfferNearby } from '../types/offers-nearby';
import { ReviewData } from '../mocks/reviews';
import { AuthorizationStatus } from '../utils/constants';

export const setCity = createAction<City>('setCity');

export const setOffers = createAction<OfferData[]>('setOffers');

export const setSorting = createAction<Sorting>('setSorting');

export const setOffersDataLoadingStatus = createAction<boolean>('setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/checkAuth');

export const setError = createAction<string | null>('setError');

export const setOffer = createAction<OfferDetailed>('setOffer');

export const setOffersNearby = createAction<OfferNearby[]>('setOffersNearby');

export const setReviews = createAction<ReviewData[]>('setReviews');

export const dropOffer = createAction('dropOffer');
