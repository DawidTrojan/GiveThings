import React from "react";
import ReactDOM from "react-dom";
import App from "../src/js/App";
import { Provider } from "react-redux";
import "./scss/main.scss";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducers";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyA2uEHsJLVW_VREHame_keyQu0xiuaiMa8",
  authDomain: "give-things.firebaseapp.com",
  databaseURL: "https://give-things.firebaseio.com",
  projectId: "give-things",
  storageBucket: "give-things.appspot.com",
  messagingSenderId: "749997316367",
  appId: "1:749997316367:web:50b66ecbc90cd73d5d067a"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk.withExtraArgument({ getFirebase, getFirestore }),
      logger
    ),
    reduxFirestore(firebaseConfig)
  )
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
