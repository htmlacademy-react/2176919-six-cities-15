import { CityLocation, Location } from './offers';

export type FavoriteOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: CityLocation;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type FavoriteOfferDetailed = {
  id: string;
  title: string;
  description: string;
  type: string;
  price: number;
  previewImage: string;
  images: string[];
  city: CityLocation;
  location: Location;
  goods: string[];
  host: {
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
}
