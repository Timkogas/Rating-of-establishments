import './PostsWrapper.css'
import PostItem from './PostItem/PostItem';


function PostsWrapper({ posts, deletePostHandler, onClickPostHandler }) {

  return (
    <>
      <div className='posts_header'>
        <h1 className='posts_header_title'>Все заведения</h1>
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
              totalReviews={post.totalReviews}
              totalRictures={post.totalRictures}
            />)

        }) : <h1>Нет заведений ;c</h1>}
      </div>
    </>
  );
}

export default PostsWrapper;