import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddPostForm from "../components/AddPostForm/AddPostForm";
import PostsWrapper from "../components/PostsWrapper/PostsWrapper";
import Modal from '../components/UI/Modal/Modal';
import Preloader from "../components/UI/Preloader/Preloader";
import { addPost, deletePost, fetchPosts } from "../store/actions/postsAction";



function Posts() {
  const [activeModal, setActiveModal] = useState(false)

  const handleOpenModal = () => {
    setActiveModal(true)
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { loading, errorAdd, posts } = useSelector(state => state.posts, shallowEqual)
  const [filename, setFilename] = useState("");
  const [fields, setFields] = useState({
    title: '',
    image: '',
    description: '',
  });

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])



  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFields(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const fileChangeHandler = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];
    setFields(prevState => {
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

  const addPostHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', fields.title)
    formData.append('image', fields.image)
    formData.append('description', fields.description)
    if (fields.title && fields.image && fields.description) {
      setFilename("");
      setActiveModal(false)
      setFields({
        title: '',
        image: '',
        description: '',
      })
    }
    await dispatch(addPost(formData))
  }

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
      <Modal
        active={activeModal}
        setActive={setActiveModal}
      >
        <AddPostForm
          errorAdd={errorAdd}
          fields={fields}
          onChangeHandler={onChangeHandler}
          addPostHandler={addPostHandler}
          filename={filename}
          onFileChangeHandler={onFileChangeHandler}
        />
      </Modal>
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