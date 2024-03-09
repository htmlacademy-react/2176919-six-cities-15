import classNames from 'classnames';
import {useAppDispatch} from '../../hooks';
import { cityChange } from '../../store/action';

type LocationProps = {
  city: string;
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
          dispatch(cityChange(value));
        }
      }}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

export default Location;
