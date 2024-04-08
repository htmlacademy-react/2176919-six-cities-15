import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks';
import { setCity } from '../../../store/slices/offers';
import { City } from '../../../utils/cities';
import { OfferData } from '../../../types/offers';
import { AppRoute } from '../../../utils/constants';
import OffersList from '../../../components/offers-list/offers-list';

type FavoritesItemProps = {
  title: City;
  offers: OfferData[];
}

function FavoritesItem({title, offers}: FavoritesItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#" onClick={(evt) => {
            evt.preventDefault();
            dispatch(setCity(title));
            navigate(AppRoute.Root);
          }}
          >
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
