import Location from '../../components/cities-list/location';


const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export type City = typeof CITIES[number]

type CitiesListProps = {
  isTabs: boolean;
}

function CitiesList({isTabs}: CitiesListProps) {
  return (
    CITIES.map((city) => <Location city={city} key={city} isTabs={isTabs} />)
  );
}

export default CitiesList;
