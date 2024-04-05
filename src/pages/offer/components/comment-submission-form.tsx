import { useState, ChangeEvent, FormEvent, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { useParams } from 'react-router-dom';
import { reviewAction } from '../../../store/api-actions';
import { statusReviewSending } from '../../../store/selectors';
import { RequestStatus } from '../../../utils/constants';
import StarsList from './stars-list';

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

function CommentSubmissionForm(): JSX.Element {
  const [rating, setRating] = useState<number> (0);
  const [comment, setComment] = useState<string>('');
  const { id: offerId } = useParams();
  const dispatch = useAppDispatch();
  const dispatchStatus = useAppSelector(statusReviewSending);
  const isLoading = dispatchStatus === RequestStatus.Loading;
  const isErrorSubmission = dispatchStatus === RequestStatus.Error;
  const isSuccessSubmission = dispatchStatus === RequestStatus.Success;

  const clearingForm = () => {
    if (!isLoading && !isErrorSubmission && isSuccessSubmission) {
      setComment('');
      setRating(0);
    }
  };

  function handleChange(evt: ChangeEvent<HTMLTextAreaElement>) {
    setComment(evt.target.value);
  }

  const handleRating = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  }, []);

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (offerId) {
      dispatch(reviewAction({offerId, comment, rating}));
      clearingForm();
    }
  };

  return (
    <form className="reviews__form form" action='#' method="post" onSubmit={onFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <StarsList onChangeField={handleRating} isLoading={isLoading} rating={rating} />

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        minLength={MIN_REVIEW_LENGTH}
        maxLength={MAX_REVIEW_LENGTH}
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleChange}
        disabled={isLoading}
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={comment.length <= MIN_REVIEW_LENGTH || comment.length >= MAX_REVIEW_LENGTH || rating === 0}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default CommentSubmissionForm;
