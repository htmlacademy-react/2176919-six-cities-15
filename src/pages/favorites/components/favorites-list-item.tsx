import { memo } from 'react';
import { City } from '../../../components/cities-list/cities-list';
import { OfferData } from '../../../types/offers';
import OffersList from '../../../components/offers-list/offers-list';

type FavoritesItemProps = {
  title: City;
  offers: OfferData[];
}

function FavoritesItem({title, offers}: FavoritesItemProps): JSX.Element {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{title}</span>
          </a>
        </div>
      </div>
      {<OffersList offers={offers} variant={'horizontal'} />}
    </li>
  );
}

const FavoritesListItem = memo(FavoritesItem);
export default FavoritesListItem;
