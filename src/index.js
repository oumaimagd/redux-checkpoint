import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./components/store";
import reportWebVitals from "./reportWebVitals"; // Importez reportWebVitals depuis le module correspondant

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals(); // Appelez reportWebVitals pour mesurer les performances de votre application
