import React from "react";
import Lists from "../components/Lists";

/**
 * @class Sidepanel
 */
export default class Sidepanel extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="l-app__sidepanel">
        <h1 className="c-title">
          <span>{this.props.title}</span>
          <span>12</span>
        </h1>
        <Lists />
      </div>
    )
  }
}