type PlacesOptionProps = {
  option: string;
}

function PlacesOption({option}: PlacesOptionProps): JSX.Element {
  return (
    <li className="places__option" tabIndex={0}>{option}</li>
  );
}

export default PlacesOption;
