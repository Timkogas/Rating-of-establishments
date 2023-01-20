import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Preloader from "../components/UI/Preloader/Preloader";
import { useEffect } from "react";
import { fetchPost } from "../store/actions/postsAction";
import PostBlock from "../components/PostBlock/PostBlock";


function Post() {
  const params = useParams()
  const dispatch = useDispatch()
  const {post, loading} = useSelector(state=>state.posts)

  useEffect(()=>{
    dispatch(fetchPost(params.id))
  }, [params, dispatch])

  return (
    <>
      <Preloader showPreloader={loading}/>
      <PostBlock
        post={post}
      />
    </>
  );
}

export default Post;