import { OfferData } from '../../mocks/offers';
import { useState } from 'react';
import PlaceCard from '../place-card/place-card';
import classNames from 'classnames';

type OffersListProps = {
  variant: 'vertical' | 'horizontal';
  offers: OfferData[];
  onListItemHover?: (listItemId: string) => void;
}

function OffersList({variant, offers, onListItemHover}: OffersListProps): JSX.Element {
  const [cardActive, setCardActive ] = useState('');
  const isVertical = variant === 'vertical';

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
      {offers.map((offer: OfferData) => <PlaceCard variant={variant} offer={offer} key={offer.id} onMouseEnter={() => setCardActive(offer.id)} onMouseLeave={() => setCardActive('')} />)};
    </div>
  );
}

export default OffersList;
