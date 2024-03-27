import { useState, ChangeEvent } from 'react';
import { useAppDispatch } from '../../../hooks';
import { useParams } from 'react-router-dom';
import { reviewAction } from '../../../store/api-actions';
import ReviewStar from './review-star';

const COUNTDOWN_STARS = [5, 4, 3, 2, 1];

function CommentSubmissionForm(): JSX.Element {
  const { id: offerId } = useParams();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    rating: 0,
    review: '',
  });
  const handleFieldChange: (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void = (evt) => {
    const { name, value } = evt.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData({...formData, [name]: value});
  };

  const onClickSubmit = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    const comment = formData.review;
    const rating = + formData.rating;
    if (offerId) {
      dispatch(reviewAction({offerId, comment, rating}));
    }
  };

  return (
    <form className="reviews__form form" action='#' method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {COUNTDOWN_STARS.map((counter) => <ReviewStar counter={counter} onChangeField={handleFieldChange} key={counter}/>)}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" minLength={50} maxLength={300} placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleFieldChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={formData.review.length < 50 || formData.rating === 0} onClick={onClickSubmit}>Submit</button>
      </div>
    </form>
  );
}

export default CommentSubmissionForm;
