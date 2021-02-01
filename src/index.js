import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrickMode>
    {/*<h1>Hello world</h1>*/}
    {React.createElement(h1, null, "Hello world")}
  </React.StrickMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// serviceWorker.unregister();
