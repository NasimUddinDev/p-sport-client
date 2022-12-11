import axios from "axios";
import {
  GET_SHEDULE_ERROR,
  GET_SHEDULE_REQUEST,
  GET_SHEDULE_SUCCESS,
} from "./../constants/sheduleConstants";

export const getAllShedule = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SHEDULE_REQUEST });
    const res = await axios.get("cricketShedule.json");
    dispatch({ type: GET_SHEDULE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_SHEDULE_ERROR, payload: error.message });
  }
};
