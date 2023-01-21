
import './ReviewItem.css'

function ReviewItem({text, datetime, author, ratingInterior, ratingQuality, ratingService}) {

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
            <span><strong>Качество сервеса: </strong> {ratingQuality}/5</span>
            <span><strong>Качество интерьера: </strong> {ratingInterior}/5</span>
          </div>
        </div>
    </>
  );
}

export default ReviewItem;