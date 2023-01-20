import './PostsWrapper.css'
import PostItem from './PostItem/PostItem';
import Button from '../UI/Button/Button';


function PostsWrapper({ handleOpenModal, posts, deletePostHandler, onClickPostHandler }) {
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
              author={post?.user?.username}
              onClickPostHandler={()=>{onClickPostHandler(post._id)}}
              datetime={new Date(post.datetime).toLocaleString()}
              deletePostHandler={(e)=>{deletePostHandler(e, post._id)}}
            />)

        }) : <h1>Нет постов ;c</h1>}
      </div>
    </>
  );
}

export default PostsWrapper;