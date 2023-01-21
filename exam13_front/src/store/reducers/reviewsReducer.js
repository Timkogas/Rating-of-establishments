import { ADD_REVIEW_SUCCESS, FETCH_REVIEWS_ERROR, FETCH_REVIEWS_REQUEST, FETCH_REVIEWS_SUCCESS } from "../actionTypes/reviewsActionsType";

const initialState = {
  reviews: [],
  loading: false,
  error: null,
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEWS_REQUEST:
      return { ...state, loading: true };
    case FETCH_REVIEWS_SUCCESS:
      return { ...state, loading: false, reviews: action.reviews };
    case FETCH_REVIEWS_ERROR:
      return { ...state, loading: false, error: action.error };
    case ADD_REVIEW_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reviewsReducer;