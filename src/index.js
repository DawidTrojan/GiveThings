import React from "react";
import ReactDOM from "react-dom";
import App from "../src/js/App";
import { Provider } from "react-redux";
import "./scss/main.scss";
import store from "./redux/store";

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});
