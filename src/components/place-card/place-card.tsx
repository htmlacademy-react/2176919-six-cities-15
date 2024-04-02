import { OfferData } from '../../types/offers';
import { FavoriteStatus, PlaceCardSize, AuthorizationStatus, AppRoute } from '../../utils/constants';
import { Link, useNavigate } from 'react-router-dom';
import { memo, useCallback, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { favoriteAction } from '../../store/api-actions';
import { getAuthorizationStatus, getFavoritesAll } from '../../store/selectors';
import { FavoriteOffer } from '../../types/favorite-offer';
import classNames from 'classnames';
import Premium from './components/premium';
import BookmarkButton from './components/bookmark-button';


type PlaceCardProp = {
  offer: OfferData;
  variant: 'vertical' | 'horizontal';
  onMouseEnter(): void;
  onMouseLeave(): void;
  isNearby?: boolean;
};

const getPlaceCardState = (variant = 'vertical') => {
  let cardWidth = PlaceCardSize.PlaceCard.with;
  let cardHeight = PlaceCardSize.PlaceCard.height;

  if (variant === 'horizontal') {
    cardWidth = PlaceCardSize.PlaceCardSmall.with;
    cardHeight = PlaceCardSize.PlaceCardSmall.height;
  }
  return {cardWidth, cardHeight};
};

function Card({offer, variant, onMouseEnter, onMouseLeave, isNearby}: PlaceCardProp): JSX.Element {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {title, isPremium, price, type, previewImage, rating, id} = offer;
  const {cardWidth, cardHeight} = getPlaceCardState(variant);
  const isVertical = variant === 'vertical';
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoritesOffers = useAppSelector(getFavoritesAll);

  useEffect(() => {
    const initialFavoriteStatus = (idOffer: string, offers: FavoriteOffer[]) => {
      const selectedOffers = offers.filter((item) => item.id === idOffer);
      if(selectedOffers.length !== 0) {
        setIsFavorite(true);
      }
    };

    if (favoritesOffers && id) {
      initialFavoriteStatus(id, favoritesOffers);
    }
  }, [favoritesOffers, id]);

  const handleFavorite = useCallback(() => {
    const checkingFavorites = (idOffer: string, offers: FavoriteOffer[]) => {
      const selectedOffers = offers.filter((item) => item.id === idOffer);
      if(selectedOffers.length !== 0) {
        setIsFavorite(false);
        return FavoriteStatus.Extract;
      }
      setIsFavorite(true);
      return FavoriteStatus.Add;
    };
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(favoriteAction({offerId:id, isFavorite: checkingFavorites(id, favoritesOffers)}));
    } else {
      navigate(AppRoute.Login);
    }
  }, [dispatch, id, authorizationStatus, navigate, favoritesOffers]);

  return (
    <article className={classNames(
      'place-card',
      {'cities__card': isVertical},
      {'favorites__card': !isVertical},
      {'near-places__card': isNearby}
    )} onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    >
      {isPremium ? <Premium /> : ''}
      <div className={classNames(
        'place-card__image-wrapper',
        {'cities__image-wrapper': isVertical},
        {'favorites__image-wrapper': !isVertical},
        {'near-places__image-wrapper': isNearby}
      )}
      >
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={cardWidth} height={cardHeight} alt="Place image"/>
        </Link>
      </div>
      <div className={classNames(
        'place-card__info',
        {'favorites__card-info': !isVertical}
      )}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton isFavorite={isFavorite} onChange={handleFavorite}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
}

function arePropsEqual(oldProps: PlaceCardProp, newProps: PlaceCardProp) {
  return oldProps.offer === newProps.offer;
}

const PlaceCard = memo(Card, arePropsEqual);

export default PlaceCard;
