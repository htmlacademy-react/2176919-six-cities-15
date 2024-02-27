
export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum AppRoute {
  Root='/',
  Login='/login',
  Favorites='/favorites',
  Offer='/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown',
}

export enum SortType {
  Popular = 'Popular',
  PriceAscending = 'Price: low to high',
  PriceDescending = 'Price: high to low',
  RatingDescending = 'Top rated first',
}

export const SORTING_TYPES = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export const PlaceCardSize = {
  PlaceCard: {
    with: '260',
    height: '200',
  },
  PlaceCardSmall: {
    with: '150',
    height: '110',
  }
};
