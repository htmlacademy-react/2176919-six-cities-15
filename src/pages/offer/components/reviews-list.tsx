import { ReviewData } from '../../../types/reviews';
import { AuthorizationStatus } from '../../../utils/constants';
import { getSortedReviews, getAuthorizationStatus } from '../../../store/selectors';
import { useAppSelector } from '../../../hooks';
import CommentSubmissionForm from './comment-submission-form';
import Review from './review';

const REVIEW_COUNT = 10;

function ReviewsList(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const reviews: ReviewData[] = useAppSelector(getSortedReviews);
  const reviewsCounter = reviews.length;
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCounter}</span></h2>
      <ul className="reviews__list">
        {
          reviews?.map((review) => <Review review={review} key={review.id}/>).slice(0, REVIEW_COUNT)
        }

      </ul>
      {isAuth ? <CommentSubmissionForm /> : null}
    </section>
  );
}

export default ReviewsList;
