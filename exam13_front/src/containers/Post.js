import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Preloader from "../components/UI/Preloader/Preloader";
import { useEffect, useState } from "react";
import { fetchPost } from "../store/actions/postsAction";
import PostBlock from "../components/PostBlock/PostBlock";
import { addReview, fetchReviews } from "../store/actions/reviewsAction";


function Post() {
  const params = useParams()
  const dispatch = useDispatch()
  const {post, loading, picturesPost} = useSelector(state=>state.posts, shallowEqual)
  const {reviews} = useSelector(state=>state.reviews)
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
    dispatch(fetchReviews(params.id))
  }, [params, dispatch])

  const addReviewHandler = async (e) => {
    e.preventDefault();
    const commentData = {
        ...newReview,
        "place": params.id,
    };
    await dispatch(addReview(commentData));
    setNewReview({
      text: '',
      ratingQuality: 0,
      ratingService: 0,
      ratingInterior: 0,
    });
    await dispatch(fetchPost(params.id))
    await dispatch(fetchReviews(params.id))
};

  return (
    <>
      <Preloader showPreloader={loading}/>
      <PostBlock
        reviews={reviews}
        post={post}
        newReview={newReview}
        onChangeHandler={onChangeHandler}
        addReviewHandler={addReviewHandler}
        picturesPost={picturesPost}
      />
    </>
  );
}

export default Post;