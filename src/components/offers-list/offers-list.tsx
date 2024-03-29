import { OfferData } from '../../types/offers';
import PlaceCard from '../place-card/place-card';
import classNames from 'classnames';

type OffersListProps = {
  offers: OfferData[];
  variant: 'vertical' | 'horizontal';
  onListItemHover?: (listItemId: string) => void;
}

function OffersList({offers, variant, onListItemHover}: OffersListProps): JSX.Element {
  const isVertical = variant === 'vertical';

  return (
    <div className={classNames(
      '',
      {'cities__places-list places__list tabs__content': isVertical},
      {'favorites__places': !isVertical}
    )}
    >
      {
        offers.map((offer) => (
          <PlaceCard
            variant={variant}
            offer={offer}
            key={offer.id}
            onMouseEnter={() => onListItemHover ? onListItemHover(offer.id) : undefined}
            onMouseLeave={() => onListItemHover ? onListItemHover('') : undefined}
          />
        ))
      }
    </div>
  );
}

export default OffersList;
