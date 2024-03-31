import { City } from '../components/cities-list/cities-list';

export type CityLocation = {
  'name': City;
  'location': Location;
}

export type Location = {
  'latitude': number;
  'longitude': number;
  'zoom': number;
}

export type OfferData = {
  'id': string;
  'title': string;
  'type': string;
  'price': number;
  'previewImage': string;
  'city': CityLocation;
  'location': Location;
  'isFavorite': boolean;
  'isPremium': boolean;
  'rating': number;
}
