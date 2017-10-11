import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import cachedSurveys from "./data/surveys.json";

ReactDOM.render(
  <App localData={cachedSurveys} useLocalData={false} />,
  document.getElementById("root")
);
registerServiceWorker();
