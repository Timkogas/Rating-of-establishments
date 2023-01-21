import './PostsWrapper.css'
import PostItem from './PostItem/PostItem';
import Button from '../UI/Button/Button';


function PostsWrapper({ handleOpenModal, posts, deletePostHandler, onClickPostHandler }) {
  console.log(posts)
  return (
    <>
      <div className='posts_header'>
        <h1 className='posts_header_title'>Посты</h1>
        <Button
          width={'30%'}
          onClick={() => { handleOpenModal() }}
          text={"Добавить пост"}
        />
      </div>

      <div className='posts_wrapper_container'>
        {posts.length ? posts.map((post, i) => {
          return (
            <PostItem
              key={post._id}
              title={post.title}
              img={post.image}
              onClickPostHandler={()=>{onClickPostHandler(post._id)}}
              avarageRating={post.avarageRating}
              deletePostHandler={(e)=>{deletePostHandler(e, post._id)}}
            />)

        }) : <h1>Нет постов ;c</h1>}
      </div>
    </>
  );
}

export default PostsWrapper;