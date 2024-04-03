import { ChangeEvent } from 'react';
import { ReviewStatus } from '../../../utils/constants';

type ReviewStarProps = {
  counter: number;
  onChangeField(evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void;
}

function ReviewStar({counter, onChangeField}: ReviewStarProps): JSX.Element {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={`${counter}`} id={`${counter}-star`} type="radio" onChange={onChangeField} />
      <label htmlFor={`${counter}-star`} className="reviews__rating-label form__rating-label" title={`${ReviewStatus[counter]}`}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default ReviewStar;
