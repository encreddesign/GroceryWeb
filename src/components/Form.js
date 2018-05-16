import React from "react";

/**
 * @class Form
 */
export default class Form extends React.Component {

  constructor(props) {
    super(props);
  }

  submissionHandler(event) {
    this.props.onSubmission(event);
  }

  render() {
    return (
      <form className="c-form" action={this.props.action} method={this.props.method} onSubmit={this.submissionHandler}>
      </form>
    )
  }
}