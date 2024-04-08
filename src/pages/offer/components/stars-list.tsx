import { ChangeEvent, Fragment, memo } from 'react';
import { STARS } from '../../../utils/rating';

type StarsListProps = {
  onChangeField(evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void;
  isLoading: boolean;
  rating: number;
}

function Rating({onChangeField, isLoading, rating}: StarsListProps): JSX.Element {

  return (
    <div className="reviews__rating-form form__rating">
      {
        STARS.map((star) => (
          <Fragment key={star.id}>
            <input
              className="form__rating-input visually-hidden"
              onChange={onChangeField}
              name="rating"
              value={star.id}
              id={`${star.id}-stars`}
              type="radio"
              checked={star.id === rating}
              disabled={isLoading}
            />
            <label htmlFor={`${star.id}-stars`}
              className="reviews__rating-label form__rating-label"
              title={star.title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))
      }
    </div>
  );
}

const StarsList = memo(Rating);
export default StarsList;
