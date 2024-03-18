import { useAppDispatch } from '../../../hooks';
import { setSorting } from '../../../store/action';
import { Sorting } from '../main';

type PlacesOptionProps = {
  option: Sorting;
}

function PlacesOption({option}: PlacesOptionProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <li className="places__option" tabIndex={0} onClick={(evt) => {
      const value = (evt.target as HTMLElement).textContent;
      if (value) {
        dispatch(setSorting(value as Sorting));
      }
    }}
    >{option}
    </li>
  );
}

export default PlacesOption;
