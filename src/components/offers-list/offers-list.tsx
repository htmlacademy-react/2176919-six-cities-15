import { OfferData } from '../../mocks/offers';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { AppRoute } from '../../utils/constants';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  variant: 'vertical' | 'horizontal';
  offers: OfferData[];
  onListItemHover?: (listItemId: string) => void;
}

const getOffersListState = (pathname: AppRoute) => {
  let offersListClassName = '';

  if (pathname === AppRoute.Favorites) {
    offersListClassName = 'favorites__places';
  } else {
    offersListClassName = 'cities__places-list places__list tabs__content';
  }
  return {offersListClassName};
};

function OffersList({variant, offers, onListItemHover}: OffersListProps): JSX.Element {
  const [cardActive, setCardActive ] = useState('');
  const {pathname} = useLocation();
  const {offersListClassName} = getOffersListState(pathname as AppRoute);

  if (onListItemHover) {
    onListItemHover(cardActive);
  }

  return (
    <div className={offersListClassName}>
      {offers.map((offer: OfferData) => <PlaceCard variant={variant} offer={offer} key={offer.id} onMouseEnter={() => setCardActive(offer.id)} onMouseLeave={() => setCardActive('')} />)};
    </div>
  );
}

export default OffersList;
