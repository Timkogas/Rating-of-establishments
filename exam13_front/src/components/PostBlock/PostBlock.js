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
        <h1>{post.title}</h1>
        <div className='post_block_img_and_text'>
          <img className='post_block_img' src={imageSrc} alt={post.title} />
          <p className='post_block_text'>{post.description}</p>
        </div>
        <span><strong>Автор:</strong> {post?.user?.username}</span>
        <span className='post_info'> <strong>Дата создания:</strong> {new Date(post.datetime).toLocaleString()}</span>
      </div>
    </>
  );
}

export default PostBlock;