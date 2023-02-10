import { ADD_PICTURE_SUCCESS, ADD_POST_ERROR, ADD_POST_SUCCESS, DELETE_POST_SUCCESS, FETCH_PICTURES_SUCCESS, FETCH_POSTS_ERROR, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POST_SUCCESS, SET_NULL_ADD_POST_ERROR } from "../actionTypes/postsActionsType";


const initialState = {
  posts: [],
  error: null,
  loading: false,
  errorAdd: null,
  post: {},
  picturesPost: []
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.posts };
    case FETCH_POSTS_ERROR:
      return { ...state, loading: false, error: action.error };
    case DELETE_POST_SUCCESS:
      return { ...state, loading: false }
    case ADD_POST_SUCCESS:
      return { ...state, loading: false, };
    case ADD_POST_ERROR:
      return { ...state, loading: false, errorAdd: action.error }
    case SET_NULL_ADD_POST_ERROR:
      return { ...state, errorAdd: null }
    case FETCH_POST_SUCCESS:
      return { ...state, post: action.post, loading: false }
    case FETCH_PICTURES_SUCCESS:
      return { ...state, picturesPost: action.pictures, loading: false }
    case ADD_PICTURE_SUCCESS:
      return { ...state, loading: false }
    default:
      return state;
  }
};

export default postsReducer;