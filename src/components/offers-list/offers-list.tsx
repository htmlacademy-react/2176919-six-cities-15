import { OfferData } from '../../types/offers';
import { memo } from 'react';
import { PlaceCardVariant } from '../../utils/constants';
import PlaceCard from '../place-card/place-card';
import classNames from 'classnames';

type OffersListProps = {
  offers: OfferData[];
  variant: PlaceCardVariant;
  onListItemHover?: (listItemId: string) => void;
  isNearby?: boolean;
}

function OffersCatalog({offers, variant, onListItemHover, isNearby}: OffersListProps): JSX.Element {
  const isVertical = variant === PlaceCardVariant.Vertical;

  return (
    <div className={classNames(
      '',
      {'cities__places-list places__list tabs__content': isVertical},
      {'favorites__places': !isVertical},
      {'near-places__list places__list': isNearby}
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
            isNearby
          />
        ))
      }
    </div>
  );
}

const OffersList = memo(OffersCatalog);
export default OffersList;
