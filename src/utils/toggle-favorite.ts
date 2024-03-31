import { FavoriteOffer, FavoriteOfferDetailed } from '../types/favorite-offer';
import { FavoritesSlice } from '../types/state';

export const toggleFavorite = (state: FavoritesSlice, offer: FavoriteOfferDetailed) => {
  const oldFavoriteOffer = state.offersFavorite.find(({ id }) => id === offer.id);
  if (oldFavoriteOffer) {
    const favoriteOffersIndex = state.offersFavorite.indexOf(oldFavoriteOffer);
    state.offersFavorite.splice(favoriteOffersIndex, 1);
  } else {
    const newFavoriteOffer: FavoriteOffer = {
      id: offer.id,
      title: offer.title,
      type: offer.type,
      price: offer.price,
      previewImage: offer.previewImage,
      city: offer.city,
      location: offer.location,
      isFavorite: offer.isFavorite,
      isPremium: offer.isPremium,
      rating: offer.rating
    };
    state.offersFavorite.push(newFavoriteOffer);
  }
};
