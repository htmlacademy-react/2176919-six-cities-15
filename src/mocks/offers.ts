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

export const offers: OfferData[] = [
  {
    'id': '70faa463-6bf2-40ec-bca9-4c5d055c5c7f',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 217,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.5,
  },
  {
    'id': 'bfb258c9-01a8-41ca-8261-a89143fc6013',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'room',
    'price': 197,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.2,
  },
  {
    'id': 'e721c39a-a261-4481-a9d1-1eca10f9a8a7',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 200,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.3,
  },
  {
    'id': 'f407cc1e-54e1-402a-983f-b9ef5fae611a',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'house',
    'price': 141,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.1,
  },
  {
    'id': '0fc0b7ce-438c-4824-a4bc-c6ff7b8fc4d4',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 491,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87561,
      'longitude': 2.375499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.3,
  },
  {
    'id': '961df615-f3e6-457a-b288-1acab43565bd',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'hotel',
    'price': 380,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87961000000001,
      'longitude': 2.353499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.9,
  },
  {
    'id': 'b6a283d3-0e2d-4039-a5c9-607b415cd56e',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'room',
    'price': 282,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.214402,
      'longitude': 6.764314000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.4
  },
  {
    'id': '03d0b121-7feb-48e4-8152-7f22a3a2ccfd',
    'title': 'Loft Studio in the Central Area',
    'type': 'hotel',
    'price': 228,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.225402,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.6
  },
  {
    'id': '453ead1b-e49c-4f58-926d-15006e9b39d5',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'hotel',
    'price': 450,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.950361,
      'longitude': 6.961974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.4
  },
  {
    'id': '99aea0ae-6ec9-4907-87c1-0268e6397d5b',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'room',
    'price': 166,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.371696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.1
  },
];
