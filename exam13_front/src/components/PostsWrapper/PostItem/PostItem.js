import { uploadsUrlPosts } from '../../../constants';
import './PostItem.css'



function PostItem({ title, img, deletePostHandler, onClickPostHandler, avarageRating, totalReviews, totalRictures}) {

  let imageSrc = `${uploadsUrlPosts}/${img}`;

  return (
    <>
      <div className='post_block' onClick={onClickPostHandler}>
        <div className='post_main_info'>
          <div className='post_img_and_title'>
            <img src={imageSrc} className='post_img' alt='post' />
          </div>
        </div>

        <div className='post_info_block'>
          <p className='post_title'>{title}</p>
          <span>{avarageRating ? avarageRating + '/5 средняя оценка': 'Отзывов нет'}</span>
          <span>{totalReviews ? totalReviews + ' количество отзывов' : null}</span>
          <span>{totalRictures ? totalRictures + ' количество картинок' : "Картинок нет"}</span>
        </div>
      </div>
    </>
  );
}

export default PostItem;