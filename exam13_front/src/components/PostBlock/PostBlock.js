import { uploadsUrlPosts } from '../../constants';
import HasAccess from '../UI/HasAccess/HasAccess';
import AddReviewForm from './AddReviewForm/AddReviewForm';
import './PostBlock.css'
import ReviewsWrapper from './ReviewsWrapper/ReviewsWrapper';
import { useSelector } from "react-redux";
import AddPictureForm from './AddPictureForm/AddPictureForm';
import GalleryWrapper from './GalleryWrapper/GalleryWrapper';
import Button from '../UI/Button/Button';


function PostBlock({ post, newReview, onChangeReviewHandler, addReviewHandler, reviews, filename, addPictureHandler, onFileChangeHandler, onChangePictureHandler, picturesPost, deletePictureHandler, deleteReviewHandler }) {
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

        <GalleryWrapper
          deletePictureHandler={deletePictureHandler}
          picturesPost={picturesPost}
        />

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
          deleteReviewHandler={deleteReviewHandler}
        />


        {reviews.find((review) => { return review.user._id === user._id })?._id ?
          <>
            <div className='post_block_hr'>
            </div>
            <p className='post_block_title'>Добавить отзыв</p>
            <strong>Удалите отзыв, чтобы оставить другой</strong>
            <Button text={'удалить отзыв'} width="30%" onClick={(e)=>{deleteReviewHandler(e, reviews.find((review) => { return review.user._id === user._id })._id)}}/>
          </>

          : <HasAccess allowed={user}>
            <div className='post_block_hr'></div>
            <AddReviewForm
              newReview={newReview}
              onChangeReviewHandler={onChangeReviewHandler}
              addReviewHandler={addReviewHandler}
            />
          </HasAccess>
        }

        <HasAccess allowed={user}>
          <div className='post_block_hr'></div>
          <AddPictureForm
            filename={filename}
            onChangePictureHandler={onChangePictureHandler}
            addPictureHandler={addPictureHandler}
            onFileChangeHandler={onFileChangeHandler}
          />
        </HasAccess>
      </div>

    </>
  );
}

export default PostBlock;