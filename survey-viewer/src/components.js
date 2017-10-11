import React, { Component } from "react";

class SurveyContainer extends React.Component {
  buildSurverys() {
    return this.props.surveys.map(survey => {
      return <Survey {...survey} key={survey.id} />;
    });
  }
  render() {
    return <div className="SurveyContainer">{this.buildSurverys()}</div>;
  }
}

class Survey extends React.Component {
  render() {
    const { qualifications, quotas, end_date } = this.props;
    const endDate = new Date(Date.parse(end_date));
    return (
      <div className="card Survey">
        <div className="card-header bg-info text-white">
          {this.props.survey_name}
        </div>
        <div className="card-block SurveyInfo">
          <h6 className="card-subtitle mb-2">
            ID: <text className="text-muted">{this.props.id}</text>
          </h6>
          <h6 className="card-subtitle mb-2">
            Ends on: <text className="text-muted">{endDate.toString()}</text>
          </h6>
        </div>
        <SurveyQualifications qualifications={qualifications} />
        <SurveyQuotas quotas={quotas} />
      </div>
    );
  }
}

class SurveyQualifications extends React.Component {
  render() {
    return (
      <ul className="list-group list-group-flush">
        <li className="SurveyInfoHeader list-group-item bg-secondary text-white">
          Qualifications ({this.props.qualifications.length})
        </li>
      </ul>
    );
  }
}

class SurveyQualification extends React.Component {
  render() {
    return <div />;
  }
}

class SurveyQuotas extends React.Component {
  render() {
    return (
      <ul className="list-group list-group-flush">
        <li className="SurveyInfoHeader list-group-item bg-secondary text-white">
          Quotas ({this.props.quotas.length})
        </li>
      </ul>
    );
  }
}

class SurveyQuota extends React.Component {
  render() {
    return <div />;
  }
}

export { SurveyContainer };
