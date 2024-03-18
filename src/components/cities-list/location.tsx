import classNames from 'classnames';
import {useAppDispatch} from '../../hooks';
import { setCity } from '../../store/action';
import { City } from './cities-list';

type LocationProps = {
  city: City;
  isTabs: boolean;
}

function Location({city, isTabs}: LocationProps) {
  const dispatch = useAppDispatch();
  return (
    <li className="locations__item">
      <a className={classNames(
        'locations__item-link',
        {'tabs__item' :isTabs}
      )} href="#" onClick={(evt) => {
        const value = (evt.target as HTMLElement).textContent;
        if (value) {
          dispatch(setCity(value as City));
        }
      }}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

export default Location;
