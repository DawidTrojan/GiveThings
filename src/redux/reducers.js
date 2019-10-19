import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { authReducer } from "./auth/reducers";

export default combineReducers({
  firebaseReducer,
  authReducer
});
