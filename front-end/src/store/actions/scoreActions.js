import axios from "axios";
import { SCORE_DATA_SUCCESS, SCORE_DATA_FAIL } from "../type";
export const listscore = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/scores");
    dispatch({ type: SCORE_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SCORE_DATA_FAIL, payload: error.message });
  }
};
