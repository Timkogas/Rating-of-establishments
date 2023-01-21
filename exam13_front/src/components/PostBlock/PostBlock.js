import { uploadsUrlPosts } from '../../constants';
import HasAccess from '../UI/HasAccess/HasAccess';
import AddReviewForm from './AddReviewForm/AddReviewForm';
import './PostBlock.css'
import ReviewsWrapper from './ReviewsWrapper/ReviewsWrapper';
import { useSelector } from "react-redux";
import AddPictureForm from './AddPictureForm/AddPictureForm';


function PostBlock({ post, newReview, onChangeHandler, addReviewHandler, reviews }) {

  const user = useSelector(state => state.users.user)
  let imageSrc
  if (post?.image) {
    imageSrc = `${uploadsUrlPosts}/${post?.image}`;
  } else {
    imageSrc = "https://www.peoples.ru/character/movie/shrek/shrek_4.jpg"
  }

  return (
    <>
      <div className='post_block_container'>
        <div className='post_block_img_and_text'>
          <img className='post_block_img' src={imageSrc} alt={post.title} />
          <div>
            <h1>{post.title}</h1>
            <p className='post_block_text'>{post.description}</p>
          </div>
        </div>

        <div className='post_block_hr'></div>

        <div className='post_block_gallery'>
          <p className='post_block_title'>Галлерея</p>
          <img className='post_block_gallery_item' src={imageSrc} alt={post.title} />
          <img className='post_block_gallery_item' src={imageSrc} alt={post.title} />
          <img className='post_block_gallery_item' src={imageSrc} alt={post.title} />
          <img className='post_block_gallery_item' src={imageSrc} alt={post.title} />
          <img className='post_block_gallery_item' src={imageSrc} alt={post.title} />
          <img className='post_block_gallery_item' src={imageSrc} alt={post.title} />
          <img className='post_block_gallery_item' src={imageSrc} alt={post.title} />
          <img className='post_block_gallery_item' src={imageSrc} alt={post.title} />
          <img className='post_block_gallery_item' src={imageSrc} alt={post.title} />
          <img className='post_block_gallery_item' src={imageSrc} alt={post.title} />
          <img className='post_block_gallery_item' src={imageSrc} alt={post.title} />
        </div>

        <div className='post_block_hr'></div>

        <div className='post_block_gallery'>
          <p className='post_block_title'>Оценки заведения:</p>
          <h4>Общее: {post.avarageRating || 0}/5</h4>
          <p>Качество еды: {post.ratingQuality || 0}/5</p>
          <p>Качество сервеса: {post.ratingService || 0}/5</p>
          <p>Качество интерьера: {post.ratingInterior || 0}/5</p>
        </div>

        <div className='post_block_hr'></div>

        <ReviewsWrapper
          reviews={reviews}
        />

        <div className='post_block_hr'></div>

        <HasAccess allowed={user}>
          <AddReviewForm
            newReview={newReview}
            onChangeHandler={onChangeHandler}
            addReviewHandler={addReviewHandler}
          />
        </HasAccess>

        <div className='post_block_hr'></div>
        <HasAccess allowed={user}>
          <AddPictureForm
          />
        </HasAccess>
      </div>

    </>
  );
}

export default PostBlock;