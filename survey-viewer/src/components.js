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
  state = {
    isOpen: false
  };

  buildQualifications() {
    return this.props.qualifications.map(qualification => {
      return (
        <SurveyQualification
          {...qualification}
          key={`{qualification.name} {qualification.allowed_values.join()}`}
        />
      );
    });
  }

  toggleOpen = () => {
    const toggled = !this.state.isOpen;
    this.setState({ isOpen: toggled });
  };

  render() {
    return (
      <ul className="list-group list-group-flush" onClick={this.toggleOpen}>
        <li className="SurveyInfoHeader list-group-item bg-secondary text-white">
          Qualifications ({this.props.qualifications.length})
        </li>
        {this.state.isOpen ? this.buildQualifications() : null}
      </ul>
    );
  }
}

class SurveyQualification extends React.Component {
  render() {
    return (
      <li className="SurveyAttribute list-group-item">
        <div className="SurveyAttribute-InfoBlock card-block">
          <p className="card-text mb-0">
            Name: <text className="text-muted">{this.props.name}</text>
          </p>
          <p className="card-text mb-0">
            Question:
            <text className="text-muted">{this.props.question_text}</text>
          </p>
          <p className="card-text mb-0">
            Logical Operator:
            <text className="text-muted">{this.props.logical_operator}</text>
          </p>
        </div>
        <div className="card-block">
          <p className="card-text mb-0">
            Allowed Values:
            <small className="text-muted">
              {this.props.qualification_precodes.join(", ")}
            </small>
          </p>
        </div>
      </li>
    );
  }
}

class SurveyQuotas extends React.Component {
  state = {
    isOpen: false
  };

  buildQuotas() {
    return this.props.quotas.map((quota, index) => {
      return <SurveyQuota {...quota} key={`{quota.name} {index}`} />;
    });
  }

  toggleOpen = () => {
    const toggled = !this.state.isOpen;
    this.setState({ isOpen: toggled });
  };

  render() {
    return (
      <ul className="list-group list-group-flush">
        <li
          className="SurveyInfoHeader list-group-item bg-secondary text-white"
          onClick={this.toggleOpen}
        >
          Quota ({this.props.quotas.length})
        </li>
        {this.state.isOpen ? this.buildQuotas() : null}
      </ul>
    );
  }
}

class SurveyQuota extends React.Component {
  getClassNameForQuota() {
    return this.props.quota_questions.length > 0
      ? "SurveyAttribute--expandable SurveyAttribute list-group-item"
      : "SurveyAttribute list-group-item";
  }
  buildQuestions(questions) {
    return questions.map(question => {
      return (
        <SurveyQualification
          {...question}
          qualification_precodes={question.quota_question_precodes}
          key={`{question.name} {question.quota_question_precodes.join()}`}
        />
      );
    });
  }
  render() {
    const questions = this.props.quota_questions;
    return (
      <li className={this.getClassNameForQuota()}>
        <p className="card-text mb-0">
          Type:
          <text className="text-muted">{this.props.survey_quota_type}</text>
        </p>
        <p className="card-text mb-0">
          CPI:
          <text className="text-muted">{this.props.quota_cpi}</text>
        </p>
        <p className="card-text mb-0">
          Number of Respondents:
          <text className="text-muted">{this.props.number_of_respondents}</text>
        </p>
        <p className="card-text mb-0">Quota Questions: ({questions.length})</p>
        <span>
          {questions.length > 0 ? this.buildQuestions(questions) : null}
        </span>
      </li>
    );
  }
}

export { SurveyContainer };
