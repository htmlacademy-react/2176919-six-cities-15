import { OfferData } from '../../types/offers';
import { PlaceCardSize } from '../../utils/constants';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Premium from './components/premium';


type PlaceCardProp = {
  offer: OfferData;
  variant: 'vertical' | 'horizontal';
  onMouseEnter(): void;
  onMouseLeave(): void;
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

function PlaceCard({offer, variant, onMouseEnter, onMouseLeave}: PlaceCardProp): JSX.Element {
  const {title, isPremium, price, type, previewImage, rating, id} = offer;
  const {cardWidth, cardHeight} = getPlaceCardState(variant);
  const isVertical = variant === 'vertical';
  return (
    <article className={classNames(
      'place-card',
      {'cities__card': isVertical},
      {'favorites__card': !isVertical}
    )} onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    >
      {isPremium ? <Premium /> : ''}
      <div className={classNames(
        'place-card__image-wrapper',
        {'cities__image-wrapper': isVertical},
        {'favorites__image-wrapper': !isVertical}
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
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
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

export default PlaceCard;
