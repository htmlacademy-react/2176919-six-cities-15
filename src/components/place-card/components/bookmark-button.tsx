import classNames from 'classnames';

type BookmarkButtonProps = {
  isFavorite: boolean;
  onChange: (evt: React.MouseEvent<HTMLElement>) => void;
}

export default function BookmarkButton({isFavorite, onChange}: BookmarkButtonProps): JSX.Element {
  return (
    <button className={classNames(
      'place-card__bookmark-button button',
      {'place-card__bookmark-button--active' : isFavorite}
    )} type="button" onClick={onChange}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
