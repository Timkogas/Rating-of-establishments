import { uploadsUrlPosts } from '../../constants';
import './PostBlock.css'


function PostBlock({ post }) {
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

        <div className='post_block_gallery'>
          <h2>Галлерея</h2>
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

        <div className='post_block_gallery'>
          <h2>Оценки заведения:</h2>
          <h4>Общее: {post.avarageRating}/5</h4>
          <p>Качевство еды: {post.ratingQuality}/5</p>
          <p>Качевство персонала: {post.ratingService}/5</p>
          <p>Качевство интерьера: {post.ratingInterior}/5</p>
        </div>
      </div>

    </>
  );
}

export default PostBlock;