import { OfferData } from '../../mocks/offers';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { AppRoute } from '../../utils/constants';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: OfferData[];
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

function OffersList({offers}: OffersListProps): JSX.Element {
  const [, setCardActive ] = useState('');
  const {pathname} = useLocation();
  const {offersListClassName} = getOffersListState(pathname as AppRoute);
  return (
    <div className={offersListClassName}>
      {offers.map((offer: OfferData) => <PlaceCard offer={offer} key={offer.id} onMouseEnter={() => setCardActive(offer.id)} onMouseLeave={() => setCardActive('')} />)};
    </div>
  );
}

export default OffersList;
