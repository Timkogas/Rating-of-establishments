
import ReviewItem from './ReviewItem/ReviewItem';
import './ReviewsWrapper.css'

function ReviewsWrapper({ reviews, deleteReviewHandler }) {

  return (
    <>
      <div className='post_block_gallery'>
        <p className='post_block_title'>Отзывы</p>
      </div>
      <div className='reviews_list'>
        {reviews.length ? reviews.map((review) => {
          return (<ReviewItem
            key={review._id}
            text={review.text}
            datetime={new Date(review.datetime).toLocaleString()}
            author={review.user.username}
            ratingInterior={review.ratingInterior}
            ratingQuality={review.ratingQuality}
            ratingService={review.ratingService}
            deleteReviewHandler={(e)=>{deleteReviewHandler(e, review._id)}}
          />)
        }): 'Отзывов нет :с'}
      </div>
    </>
  );
}

export default ReviewsWrapper;