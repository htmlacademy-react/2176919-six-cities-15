import dayjs from 'dayjs';
import { OfferData } from '../types/offers';
import { Sorting } from '../pages/main/components/places-options';
import { ReviewData } from '../types/reviews';

function sortOfferByPriceToHigh(offerA: OfferData, offerB: OfferData) {
  if (Number(offerA.price) > Number(offerB.price)) {
    return 1;
  }
  if (Number(offerA.price) < Number(offerB.price)) {
    return -1;
  }
  return 0;
}

function sortOfferByPriceToLow(offerA: OfferData, offerB: OfferData) {
  if (Number(offerA.price) < Number(offerB.price)) {
    return 1;
  }
  if (Number(offerA.price) > Number(offerB.price)) {
    return -1;
  }
  return 0;
}

function sortOfferByRatingToLow(offerA: OfferData, offerB: OfferData) {
  if (Number(offerA.rating) < Number(offerB.rating)) {
    return 1;
  }
  if (Number(offerA.rating) > Number(offerB.rating)) {
    return -1;
  }
  return 0;
}

export function sortOffers(sorting: Sorting, offers: OfferData[]) {
  switch(sorting) {
    case 'Price: low to high':
      return offers.sort(sortOfferByPriceToHigh);
    case 'Price: high to low':
      return offers.sort(sortOfferByPriceToLow);
    case 'Top rated first':
      return offers.sort(sortOfferByRatingToLow);
    default:
      return offers;
  }
}

export const humanizeReviewDate = (reviewDate: string) => dayjs(reviewDate).format('MMMM YYYY');

function sortReviewByDate(reviewA: ReviewData, reviewB: ReviewData) {
  if (reviewA.date < reviewB.date) {
    return 1;
  }
  if (reviewA.date > reviewB.date) {
    return -1;
  }
  return 0;
}

export function sortReview(reviews: ReviewData[]) {
  const reviewsCopy = [...reviews];
  return reviewsCopy.sort(sortReviewByDate);
}
