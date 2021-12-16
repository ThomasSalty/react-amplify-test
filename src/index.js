import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

Amplify.configure(awsconfig);

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
