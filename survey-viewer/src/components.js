import React, { Component } from "react";

class SurveyContainer extends React.Component {
  buildSurverys() {
    return this.props.surveys.map(survey => {
      return <Survey {...survey} />;
    });
  }
  render() {
    return <div className="SurveyContainer">{this.buildSurverys()}</div>;
  }
}

class Survey extends React.Component {
  render() {
    return (
      <div className="Survey col-md-4">
        <div className="header">
          <h2>{this.props.survey_name}</h2>
        </div>
      </div>
    );
  }
}

export { Survey, SurveyContainer };
