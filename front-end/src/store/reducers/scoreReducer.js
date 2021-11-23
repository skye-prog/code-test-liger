import {
  SCORE_DATA_REQUEST,
  SCORE_DATA_SUCCESS,
  SCORE_DATA_FAIL,
} from "../type";

export const scoreReducer = (state = { loading: true, scores: {} }, action) => {
  switch (action.type) {
    case SCORE_DATA_REQUEST:
      return { loading: true };
    case SCORE_DATA_SUCCESS:
      return { loading: false, scores: action.payload };
    case SCORE_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
