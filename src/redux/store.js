import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebase from "../config/firebase";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(
      thunk.withExtraArgument({ getFirebase, getFirestore }),
      logger
    ),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, {
      useFirestoreForProfile: true,
      userProfile: "users",
      attachAuthIsReady: true,
      firebaseStateName: "firebaseReducer"
    })
  )
);

export default store;
