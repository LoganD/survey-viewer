import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./index.css";
import "./App.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import cachedSurveys from "./data/surveys.json";

ReactDOM.render(
  <App localData={cachedSurveys} useLocalData={true} />,
  document.getElementById("root")
);
registerServiceWorker();
