
export const SORTING_TYPES = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'] as const;
export type Sorting = typeof SORTING_TYPES[number];
