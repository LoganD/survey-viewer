import React, { Component } from "react";
import { Survey, SurveyContainer } from "./components.js";

class App extends React.Component {
  state = {
    surveys: []
  };

  fetchSurveys = () => {
    const url = "https://s3.amazonaws.com/engineering.pinch.me/surveys.json";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";

    return fetch(proxyUrl + url)
      .then(res => res.json())
      .then(json => {
        return json;
      });
  };

  componentDidMount() {
    if (this.props.useLocalData) {
      this.setState({ surveys: this.props.localData.data });
    } else {
      this.fetchSurveys().then(surveys => {
        this.setState({ surveys: surveys.data });
      });
    }
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1>Welcome to the Survey Viewer</h1>
            <p>
              Below You'll find a list of surveys and information about them.
              <br />
              Currently we have
              <strong>{this.state.surveys.length} surveys </strong>in the
              system.
            </p>
          </div>
        </div>
        <SurveyContainer surveys={this.state.surveys} />
      </div>
    );
  }
}

export default App;
