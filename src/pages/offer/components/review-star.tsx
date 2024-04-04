import { ChangeEvent } from 'react';
import { ReviewStatus } from '../../../utils/constants';

type ReviewStarProps = {
  counter: number;
  onChangeField(evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void;
  isLoading: boolean;
}

function ReviewStar({counter, onChangeField, isLoading}: ReviewStarProps): JSX.Element {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={`${counter}`} id={`${counter}-stars`} type="radio" onChange={onChangeField} disabled={isLoading}/>
      <label htmlFor={`${counter}-stars`} className="reviews__rating-label form__rating-label" title={`${ReviewStatus[counter]}`}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default ReviewStar;
