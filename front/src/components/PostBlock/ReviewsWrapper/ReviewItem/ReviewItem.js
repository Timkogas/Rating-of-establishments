
import DeleteBtn from '../../../UI/DeleteBtn/DeleteBtn';
import './ReviewItem.css'

function ReviewItem({text, datetime, author, ratingInterior, ratingQuality, ratingService, deleteReviewHandler}) {

  return (
    <>
        <div className='review'>
          {datetime}
          <strong className='review_author'>{author} написал:</strong>
          <div className='review_text_block'>
            <p>{text}</p>
          </div>
          <div className='review_ratings'>
            <span><strong>Качество еды: </strong> {ratingQuality}/5</span>
            <span><strong>Качество сервеса: </strong> {ratingService}/5</span>
            <span><strong>Качество интерьера: </strong> {ratingInterior}/5</span>
          </div>
          <DeleteBtn
            onClick={deleteReviewHandler}
          />
        </div>
    </>
  );
}

export default ReviewItem;