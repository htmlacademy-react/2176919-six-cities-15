import { OfferData } from '../../mocks/offers';
import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../utils/constants';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offersCount: number;
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

function OffersList({offersCount, offers}: OffersListProps): JSX.Element {
  const {pathname} = useLocation();
  const {offersListClassName} = getOffersListState(pathname as AppRoute);
  return (
    <div className={offersListClassName}>
      {offers.slice(0, offersCount).map((offer: OfferData) => <PlaceCard {...offer} key={offer.id} />)};
    </div>
  );
}

export default OffersList;
//favorites__places
