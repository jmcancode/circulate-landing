import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import smoothscroll from "smoothscroll-polyfill"

smoothscroll.polyfill();

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorkerRegistration.register();

reportWebVitals();
