import { ReviewData } from '../../../mocks/reviews';
import CommentSubmissionForm from './comment-submission-form';
import Review from './review';

type ReviewsListProps = {
  reviews: ReviewData[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const reviewsCounter = reviews.length;
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCounter}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => <Review review={review} key={review.id}/>)
        }

      </ul>
      {<CommentSubmissionForm />}
    </section>
  );
}

export default ReviewsList;
