import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./public";
import configureStore from "./store";
import history from "./utils/history";

import App from "./components/App";

import * as serviceWorker from "./serviceWorker";

/**
 * Configure store
 * Initiate store with preloadedState if needed
 * Can fetch preloadedState from backend as per application requirements
 * preloadedState has to be of the same type as combined reducer
 */
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
