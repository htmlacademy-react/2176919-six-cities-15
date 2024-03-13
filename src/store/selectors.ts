import { State } from '../types/state';

export const selectedCitySelector = (state: State) => state.city;

export const sortedOffersSelector = (state: State) => {
  // здесь код для сортировки, будет возвращать уже отсортированные (сейчас он в мэйне)
};
