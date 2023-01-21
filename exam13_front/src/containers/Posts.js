import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PostsWrapper from "../components/PostsWrapper/PostsWrapper";
import Preloader from "../components/UI/Preloader/Preloader";
import { deletePost, fetchPosts } from "../store/actions/postsAction";



function Posts() {
  const [activeModal, setActiveModal] = useState(false)

  const handleOpenModal = () => {
    setActiveModal(true)
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { loading, posts } = useSelector(state => state.posts, shallowEqual)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])


  const deletePostHandler = (e, id) => {
    e.stopPropagation()
    dispatch(deletePost(id))
  }

  const onClickPostHandler = (id) => {
    navigate(`/posts/${id}`)
  }


  return (
    <>
      <Preloader
        showPreloader={loading}
      />
      <PostsWrapper
        posts={posts}
        handleOpenModal={handleOpenModal}
        deletePostHandler={deletePostHandler}
        onClickPostHandler={onClickPostHandler}
      />
    </>
  );
}

export default Posts;