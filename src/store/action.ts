import {createAction} from '@reduxjs/toolkit';
import { ReviewData } from '../types/reviews';

export const setError = createAction<string | null>('setError');

export const setReviews = createAction<ReviewData[]>('setReviews');

export const sendingReview = createAction('sendingReview');
