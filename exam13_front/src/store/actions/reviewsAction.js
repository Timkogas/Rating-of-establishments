import { FETCH_REVIEWS_ERROR, FETCH_REVIEWS_REQUEST, FETCH_REVIEWS_SUCCESS } from "../actionTypes/reviewsActionsType";
import axios from '../../axiosInstance'
import { ADD_POST_SUCCESS } from "../actionTypes/postsActionsType";

const fetchReviewsRequest = () => {
  return { type: FETCH_REVIEWS_REQUEST };
};
const fetchReviewsSuccess = (reviews) => {
  return { type: FETCH_REVIEWS_SUCCESS, reviews };
};
const fetchReviewsError = (error) => {
  return { type: FETCH_REVIEWS_ERROR, error };
};

export const fetchReviews = (postId) => {
  return async (dispatch) => {
    dispatch(fetchReviewsRequest());
    try {
      const response = await axios.get(`/reviews/?post=${postId}`);
      dispatch(fetchReviewsSuccess(response.data))
    } catch (e) {
      dispatch(fetchReviewsError(e?.response?.data?.message));
    }
  };
};

const addReviewsSuccess = () => {
  return { type: ADD_POST_SUCCESS};
};

export const addReview = (review) => {
  return async (dispatch) => {
    dispatch(fetchReviewsRequest())
    try {
      await axios.post(`/reviews`, review);
      dispatch(addReviewsSuccess())
    } catch (error) {
      dispatch(fetchReviewsError(error.response.data.e))
    }
  };
};