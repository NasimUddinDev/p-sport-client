import {
  GET_SHEDULE_ERROR,
  GET_SHEDULE_REQUEST,
  GET_SHEDULE_SUCCESS,
} from "./../constants/sheduleConstants";

const initialState = {
  isLoading: false,
  shedule: [],
  error: null,
};
const sheduoleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHEDULE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_SHEDULE_SUCCESS:
      return {
        isLoading: false,
        shedule: action.payload,
        error: null,
      };

    case GET_SHEDULE_ERROR:
      return {
        isLoading: false,
        shedule: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default sheduoleReducer;
