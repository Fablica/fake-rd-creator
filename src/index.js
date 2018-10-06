import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";

import "./index.css";
import App from "./App/App";
import store from "./helpers/store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
