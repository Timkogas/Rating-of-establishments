import { uploadsUrlPosts } from '../../constants';
import AddReviewForm from './AddReviewForm/AddReviewForm';
import './PostBlock.css'

function PostBlock({ post, newReview, onChangeHandler, addReviewHandler, reviews}) {
  let imageSrc
  if (post?.image) {
    imageSrc = `${uploadsUrlPosts}/${post?.image}`;
  } else {
    imageSrc = "https://www.peoples.ru/character/movie/shrek/shrek_4.jpg"
  }

  console.log(reviews)
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
          <h4>Общее: {post.avarageRating}/5</h4>
          <p>Качество еды: {post.ratingQuality}/5</p>
          <p>Качество сервеса: {post.ratingService}/5</p>
          <p>Качество интерьера: {post.ratingInterior}/5</p>
        </div>

        <div className='post_block_hr'></div>

        <div className='post_block_gallery'>
          <p className='post_block_title'>Отзывы</p>
        </div>

        <div className='post_block_hr'></div>

        <AddReviewForm
          newReview={newReview}
          onChangeHandler={onChangeHandler}
          addReviewHandler={addReviewHandler}
        />
      </div>

    </>
  );
}

export default PostBlock;