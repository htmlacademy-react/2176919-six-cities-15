import {createAction} from '@reduxjs/toolkit';

export const cityChange = createAction<{city: string}>('cityChange');
export const fillingListOffers = createAction('fillingListOffers');
