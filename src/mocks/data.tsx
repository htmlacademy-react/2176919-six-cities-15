export type Offer = {
    'id': string;
    'title': string;
    'type': string;
    'price': number;
    'previewImage': string;
    'city': {
      'name': string;
      'location': {
        'latitude': number;
        'longitude': number;
        'zoom': number;
      };
    };
    'location': {
      'latitude': number;
      'longitude': number;
      'zoom': number;
    };
      'isFavorite': boolean;
      'isPremium': boolean;
      'rating': number;
  }

const Offers: Offer[] = [
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
    'rating': 1.5
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
    'rating': 1.2
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
    'rating': 2.3
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
    'rating': 3.1
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
    'rating': 4.3
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
    'rating': 4.9
  },
  {
    'id': '8016a3a9-76d0-443f-97c0-a85c1b0e3689',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'apartment',
    'price': 491,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
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
      'longitude': 2.364499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.6
  },
  {
    'id': '1443091d-2f66-4495-9e3e-093f2f487e80',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'house',
    'price': 109,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.3454990000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.6
  },
  {
    'id': 'c23df728-6f26-4075-ba94-c387980b3351',
    'title': 'The house among olive ',
    'type': 'apartment',
    'price': 110,
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
      'latitude': 48.84761,
      'longitude': 2.356499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.9
  },
  {
    'id': 'e517d9e1-2cdb-4ee7-9da4-3f75b9d8b475',
    'title': 'Tile House',
    'type': 'hotel',
    'price': 281,
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
      'latitude': 48.862610000000004,
      'longitude': 2.369499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.4
  },
  {
    'id': '97c06e02-6d63-49b1-b4d4-f7653b98e093',
    'title': 'Canal View Prinsengracht',
    'type': 'hotel',
    'price': 141,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.83861,
      'longitude': 2.350499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.2
  },
  {
    'id': '80ee662a-cf12-4857-bf02-79c56306e120',
    'title': 'Canal View Prinsengracht',
    'type': 'hotel',
    'price': 453,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.861610000000006,
      'longitude': 2.340499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.8
  }
];

enum Settings {
  OffersCount = 5,
}

export {Offers, Settings};
