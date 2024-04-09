import { OfferData } from '../types/offers';
import { City } from './cities';

export const getFavoritesByCity = (offers: OfferData[]) => {
  const cities: City[] = [];
  offers.forEach((element) => {
    if(!cities.includes(element.city.name)) {
      cities.push(element.city.name);
    }
  });
  return cities.map((city) => ({city, offers: offers.filter((item) => item.city.name === city)}));
};
