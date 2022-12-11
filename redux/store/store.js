import { applyMiddleware, createStore } from "redux";
import sheduoleReducer from "../reducers/sheduleReducer";
import thunk from "redux-thunk";

const store = createStore(sheduoleReducer, applyMiddleware(thunk));

export default store;
