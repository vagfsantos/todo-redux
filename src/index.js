import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ConnectedApp from "./components/App";
import reducers from "./reducers";
import middlewares from "./middlewares";

import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducers, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);
