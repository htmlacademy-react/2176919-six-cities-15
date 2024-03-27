import { useState } from 'react';

const SORTING_TYPES = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'] as const;

export type Sorting = typeof SORTING_TYPES[number]

type PlacesOptionProps = {
  sorting: Sorting;
  onChange: (evt: React.MouseEvent<HTMLElement>) => void;
}

function PlacesOptions({sorting, onChange}: PlacesOptionProps): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsOpened(!isOpened)}>
        {sorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : 'places__options--closed'}`}>
        {
          SORTING_TYPES.map((option): JSX.Element => (
            <li className={`places__option ${option === sorting ? 'places__option--active' : ''}`} tabIndex={0} onClick={onChange} key={option}>
              {option}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default PlacesOptions;
