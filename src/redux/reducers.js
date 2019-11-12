import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { authReducer } from "./auth/reducers";
import { thingsReducer } from "./collection/reducers";
import { firestoreReducer } from "redux-firestore";

export default combineReducers({
  firebaseReducer,
  authReducer,
  thingsReducer,
  firestoreReducer
});
