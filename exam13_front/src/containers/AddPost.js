import {useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddPostForm from "../components/AddPostForm/AddPostForm";
import { addPost } from "../store/actions/postsAction";



function AddPost() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [filename, setFilename] = useState("");
  const [fields, setFields] = useState({
    title: '',
    image: '',
    description: '',
  });

  const [approval, setApproval] = useState(false)

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
    formData.append('approval', approval)
    await dispatch(addPost(formData, navigate))
  }



  return (
    <>
      <AddPostForm
        fields={fields}
        onChangeHandler={onChangeHandler}
        addPostHandler={addPostHandler}
        filename={filename}
        onFileChangeHandler={onFileChangeHandler}
        approval={approval} 
        setApproval={setApproval}
      />
    </>
  );
}

export default AddPost;