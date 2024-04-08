import { CITIES } from '../../utils/cities';
import Location from '../../components/cities-list/location';

type CitiesListProps = {
  isTabs: boolean;
}

function CitiesList({isTabs}: CitiesListProps) {
  return (
    CITIES.map((city) => <Location city={city} key={city} isTabs={isTabs} />)
  );
}

export default CitiesList;
