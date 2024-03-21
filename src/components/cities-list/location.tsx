import classNames from 'classnames';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { setCity } from '../../store/action';
import { City } from './cities-list';
import { selectedCitySelector } from '../../store/selectors';

type LocationProps = {
  city: City;
  isTabs: boolean;
}

function Location({city, isTabs}: LocationProps) {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(selectedCitySelector);
  const isCurrentCity = city === currentCity;
  return (
    <li className="locations__item">
      <a className={classNames(
        'locations__item-link',
        {'tabs__item' :isTabs},
        {'tabs__item--active' :isCurrentCity}
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
