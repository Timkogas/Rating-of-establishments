import { uploadsUrlPosts } from '../../../constants';
import Button from '../../UI/Button/Button';
import './PostItem.css'



function PostItem({ title, img, deletePostHandler, author, datetime, onClickPostHandler }) {

  let imageSrc = `${uploadsUrlPosts}/${img}`;

  return (
    <>
      <div className='post_block' onClick={onClickPostHandler}>
        <div className='post_main_info'>
          <div className='post_img_and_title'>
            <img src={imageSrc} className='post_img' alt='post' />
            <p className='post_title'>{title}</p>
          </div>


          <div className='post_btns'>
            <Button text={'Удалить'} onClick={deletePostHandler} width='150px' />
          </div>
        </div>

        <div className='post_info_block'>
          <span className='post_info'> <strong>Автор:</strong> {author}</span>
          <span className='post_info'> <strong>Дата создания:</strong> {datetime}</span>
        </div>
      </div>
    </>
  );
}

export default PostItem;