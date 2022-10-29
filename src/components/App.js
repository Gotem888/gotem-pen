import React from "react";

import { Provider, connect } from "react-redux";

import ConnectedRouts from "./Routes";
import store from "../store/reducers";

function App() {
  return (
    <>
      <Provider store={store}>
        <ConnectedRouts />
      </Provider>
    </>
  );
}

export default App;
