import axios from "../../axiosInstance";
import { ADD_PICTURE_SUCCESS, ADD_POST_ERROR, ADD_POST_SUCCESS, DELETE_POST_SUCCESS, FETCH_PICTURES_SUCCESS, FETCH_POSTS_ERROR, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POST_SUCCESS, SET_NULL_ADD_POST_ERROR } from "../actionTypes/postsActionsType";

const fetchPostsRequest = () => {
  return { type: FETCH_POSTS_REQUEST };
};
const fetchPostsSuccess = (posts) => {
  return { type: FETCH_POSTS_SUCCESS, posts };
};
const fetchPostsError = (error) => {
  return { type: FETCH_POSTS_ERROR, error };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const response = await axios.get(`/places`);
      dispatch(fetchPostsSuccess(response.data))
    } catch (e) {
      dispatch(fetchPostsError(e?.response?.data?.message));
    }
  };
};

const deletePostSuccess = () => {
  return { type: DELETE_POST_SUCCESS }
}

export const deletePost = (postId) => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest())
    try {
      await axios.delete(`/places/${postId}`)
      dispatch(deletePostSuccess())
      dispatch(fetchPosts())
    } catch (e) {
      dispatch(fetchPostsError(e?.response?.data?.message))

    }
  }
}

const addPostSuccess = () => {
  return { type: ADD_POST_SUCCESS };
};
const addPostError = (error) => {
  return { type: ADD_POST_ERROR, error };
};
const setNullAddPostError = () => {
  return { type: SET_NULL_ADD_POST_ERROR }
}


export const addPost = (post, navigate) => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest())
    try {
      await axios.post(`/places`, post);
      dispatch(addPostSuccess());
      dispatch(setNullAddPostError())
      navigate(`/`)
    } catch (error) {
      dispatch(addPostError(error.response.data.e))
    }
  };
};

const fetchPostSuccess = (post) => {
  return { type: FETCH_POST_SUCCESS, post };
};

export const fetchPost = (id) => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const response = await axios.get(`/places/${id}`);
      dispatch(fetchPostSuccess(response.data))
    } catch (e) {
      console.log(e.response.data)
      dispatch(fetchPostsError(e?.response?.data?.message));
    }
  };
};

const fetchPicturesSuccess = (pictures) => {
  return { type: FETCH_PICTURES_SUCCESS, pictures };
};

export const fetchPictures = (postId) => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const response = await axios.get(`/pictures/?post=${postId}`);
      dispatch(fetchPicturesSuccess(response.data))
    } catch (e) {
      dispatch(fetchPostsError(e?.response?.data?.message));
    }
  };
};

const addPictureSucess = () => {
  return { type: ADD_PICTURE_SUCCESS,  };
};

export const addPicture = (picture) => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest())
    try {
      await axios.post(`/pictures`, picture);
      dispatch(addPictureSucess())
    } catch (error) {
      dispatch(fetchPostsError(error.response.data.e))
    }
  };
};