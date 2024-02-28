
const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

enum AppRoute {
  Root='/',
  Login='/login',
  Favorites='/favorites',
  Offer='/offer/:id',
}

enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown',
}

enum SortType {
  Popular = 'Popular',
  PriceAscending = 'Price: low to high',
  PriceDescending = 'Price: high to low',
  RatingDescending = 'Top rated first',
}

const SORTING_TYPES = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

const PlaceCardSize = {
  PlaceCard: {
    with: '260',
    height: '200',
  },
  PlaceCardSmall: {
    with: '150',
    height: '110',
  }
};

export {CITIES, AppRoute, AuthorizationStatus, SortType, SORTING_TYPES, PlaceCardSize};
