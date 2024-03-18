import { OfferData } from '../../types/offers';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getOffersNearby, sortedOffersSelector } from '../../store/selectors';
import PlaceCard from '../place-card/place-card';
import classNames from 'classnames';

type OffersListProps = {
  variant: 'vertical' | 'horizontal';
  isSelectedOffer: boolean;
  onListItemHover?: (listItemId: string) => void;
}

function OffersList({variant, isSelectedOffer, onListItemHover}: OffersListProps): JSX.Element {
  const [cardActive, setCardActive ] = useState('');
  const isVertical = variant === 'vertical';
  const selectedOffers = useAppSelector(sortedOffersSelector);
  const offersNearby = useAppSelector(getOffersNearby);

  if (onListItemHover) {
    onListItemHover(cardActive);
  }

  return (
    <div className={classNames(
      '',
      {'cities__places-list places__list tabs__content': isVertical},
      {'favorites__places': !isVertical}
    )}
    >
      {isSelectedOffer ? offersNearby.map((offer: OfferData) => <PlaceCard variant={variant} offer={offer} key={offer.id} onMouseEnter={() => setCardActive(offer.id)} onMouseLeave={() => setCardActive('')} />) : selectedOffers.map((offer: OfferData) => <PlaceCard variant={variant} offer={offer} key={offer.id} onMouseEnter={() => setCardActive(offer.id)} onMouseLeave={() => setCardActive('')} />)};
    </div>
  );
}

export default OffersList;
