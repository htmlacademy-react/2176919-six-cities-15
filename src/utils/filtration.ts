import { OfferData } from '../types/offers';
import { City } from '../components/cities-list/cities-list';

export const getFavoritesByCity = (offers: OfferData[]) => {
  const cities: City[] = [];
  offers.forEach((element) => {
    if(!cities.includes(element.city.name)) {
      cities.push(element.city.name);
    }
  });
  return cities.map((city) => ({city, offers: offers.filter((item) => item.city.name === city)}));
};
