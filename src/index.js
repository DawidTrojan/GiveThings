import React from "react";
import ReactDOM from "react-dom";
import App from "../src/js/App";
import { Provider } from "react-redux";
import "./scss/main.scss";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducers";
// import { logger } from "redux-logger";
import firebaseConfig from "./js/firebase/firebase";
import thunk from "redux-thunk";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import firebase from "firebase/app";

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk.withExtraArgument({ getFirebase, getFirestore })
      // logger
    ),
    reduxFirestore(firebaseConfig)
  )
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
