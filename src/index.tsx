import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { Provider } from "react-redux";
import App from "./App";

//@ts-ignore
const store = createStore(rootReducer, { balance: { balance: 0 } });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
