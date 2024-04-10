import {internet, image, address, name, lorem, datatype} from 'faker';
import { nanoid } from 'nanoid';
import { getRandomInteger } from './random-city';
import { OfferDetailed } from '../types/offer';

export const makeFakeUser = () => ({email: internet.email(), avatarUrl: image.avatar()});

export const makeFakeOffer = (): OfferDetailed => ({
  id: nanoid(),
  title: address.cityName(),
  type: address.streetName(),
  price: getRandomInteger(1800, 7000),
  city: {
    name: address.cityName(),
    location: {
      latitude: getRandomInteger(28, 29),
      longitude: getRandomInteger(46, 48),
      zoom: getRandomInteger(10, 16),
    },
  },
  location: {
    latitude: getRandomInteger(28, 29),
    longitude: getRandomInteger(46, 48),
    zoom: getRandomInteger(10, 16),
  },
  isFavorite: false,
  isPremium: false,
  rating: getRandomInteger(1, 5),
  description: address.direction(),
  bedrooms: getRandomInteger(1, 5),
  goods: [lorem.word()],
  host: {
    name: name.firstName(),
    avatarUrl: image.avatar(),
    isPro: false,
  },
  images: [image.imageUrl()],
  maxAdults: getRandomInteger(1, 5),
});

export const makeFakeOfferNearby = () => ({
  id: nanoid(),
  title: address.cityName(),
  type: address.streetName(),
  price: getRandomInteger(1800, 7000),
  city: {
    name: address.cityName(),
    location: {
      latitude: getRandomInteger(28, 29),
      longitude: getRandomInteger(46, 48),
      zoom: getRandomInteger(10, 16),
    },
  },
  location: {
    latitude: getRandomInteger(28, 29),
    longitude: getRandomInteger(46, 48),
    zoom: getRandomInteger(10, 16),
  },
  isFavorite: false,
  isPremium: false,
  rating: getRandomInteger(1, 5),
  previewImage: image.imageUrl(),
});

export const makeFakeReview = () => ({
  id: nanoid(),
  date: datatype.string(),
  user: {
    name: name.findName(),
    avatarUrl: image.avatar(),
    isPro: false,
  },
  comment: lorem.text(),
  rating: getRandomInteger(1, 5),
});
