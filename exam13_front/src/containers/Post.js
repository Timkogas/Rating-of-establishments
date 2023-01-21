import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Preloader from "../components/UI/Preloader/Preloader";
import { useEffect, useState } from "react";
import { addPicture, fetchPictures, fetchPost } from "../store/actions/postsAction";
import PostBlock from "../components/PostBlock/PostBlock";
import { addReview, fetchReviews } from "../store/actions/reviewsAction";


function Post() {
  const params = useParams()
  const dispatch = useDispatch()
  const { post, loading, picturesPost } = useSelector(state => state.posts, shallowEqual)
  const { reviews } = useSelector(state => state.reviews)
  const [filename, setFilename] = useState("");
  const [picture, setPicture] = useState({
    image: '',
  });
  const [newReview, setNewReview] = useState({
    text: '',
    ratingQuality: 0,
    ratingService: 0,
    ratingInterior: 0,
  })

  const onChangeReviewHandler = (e) => {
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

  useEffect(() => {
    dispatch(fetchPost(params.id))
    dispatch(fetchReviews(params.id))
    dispatch(fetchPictures(params.id))
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

  const onChangePictureHandler = (e) => {
    const { name, value } = e.target;
    setPicture(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const fileChangeHandler = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];
    setPicture(prevState => {
      return {
        ...prevState,
        [name]: file
      }
    });
  };

  const onFileChangeHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFilename(file.name);
    } else {
      setFilename("");
    }
    fileChangeHandler(e)
  };

  const addPictureHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', picture.image)
    formData.append("place", params.id)
    await dispatch(addPicture(formData))
    await dispatch(fetchPictures(params.id))
    setPicture({
      image: '',
    })
    setFilename('')
  }



  return (
    <>
      <Preloader showPreloader={loading} />
      <PostBlock
        reviews={reviews}
        post={post}
        newReview={newReview}
        onChangeReviewHandler={onChangeReviewHandler}
        addReviewHandler={addReviewHandler}
        picturesPost={picturesPost}

        filename={filename}
        onChangePictureHandler={onChangePictureHandler}
        addPictureHandler={addPictureHandler}
        onFileChangeHandler={onFileChangeHandler}
      />
    </>
  );
}

export default Post;