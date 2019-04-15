import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";
import { authenticateUser } from "./store/actions/index";
import { setAuthToken } from "./configAxios";
import storeConfig from "./store/configStore";

import App from "./App";

import "./index.scss";

const store = storeConfig();
if (localStorage.authToken) {
  setAuthToken(localStorage.authToken);
  store.dispatch(authenticateUser(true));
  // const currentTime = Date.now();
  // if (localStorage.expiresIn < currentTime) {
  //   store.dispatch(logoutUser());
  //   window.location.href = "/";
  // }
}

const app = (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
