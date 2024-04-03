import { City } from '../components/cities-list/cities-list';

const getRandomInteger = (a:number = 1, b:number = 500) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
export const getRandomArrayElement = (elements: City[]): City => elements[getRandomInteger(0, elements.length - 1)];
