import { OfferData } from '../types/offers';
import { Sorting } from '../pages/main/main';

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
