import React, { Component } from "react";
import { Grid, Navbar, Jumbotron, Button } from "react-bootstrap";

class App extends Component {
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
                <a href="/">React App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank"
              >
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
