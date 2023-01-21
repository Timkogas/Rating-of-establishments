import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Preloader from "../components/UI/Preloader/Preloader";
import { useEffect, useState } from "react";
import { fetchPost } from "../store/actions/postsAction";
import PostBlock from "../components/PostBlock/PostBlock";


function Post() {
  const params = useParams()
  const dispatch = useDispatch()
  const {post, loading} = useSelector(state=>state.posts)

  const [newReview, setNewReview] = useState({
    text: '',
    ratingQuality: 0,
    ratingService: 0,
    ratingInterior: 0,
  }) 

  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    if (name !== 'text') {
      value = parseInt(value)
    }
    setNewReview(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  useEffect(()=>{
    dispatch(fetchPost(params.id))
  }, [params, dispatch])

  return (
    <>
      <Preloader showPreloader={loading}/>
      <PostBlock
        post={post}
        newReview={newReview}
        onChangeHandler={onChangeHandler}
      />
    </>
  );
}

export default Post;