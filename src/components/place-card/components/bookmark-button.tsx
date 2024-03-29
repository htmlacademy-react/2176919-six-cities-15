type BookmarkButtonProps = {
  onChange: (evt: React.MouseEvent<HTMLElement>) => void;
}

export default function BookmarkButton({onChange}: BookmarkButtonProps): JSX.Element {
  return (
    <button className="place-card__bookmark-button button" type="button" onClick={onChange}>
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
