import { CityLocation, Location } from './offers';

export type OfferNearby = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityLocation;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}
