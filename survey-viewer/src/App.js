import React, { Component } from "react";
import { Grid, Navbar, Jumbotron, Button } from "react-bootstrap";
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
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Survey Viewer</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to the Survey Viewer</h1>
            <p>
              Below You'll find a list of surveys and information about them.
            </p>
          </Grid>
        </Jumbotron>
        <SurveyContainer surveys={this.state.surveys} />
      </div>
    );
  }
}

export default App;
