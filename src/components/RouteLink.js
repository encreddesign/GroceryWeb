import React from "react";
import Icons from "../helpers/Icons";

/**
 * @class RouteLink
 */
export default class RouteLink extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href={this.props.route} title={this.props.title}>
        {this.props.icon ? Icons.getIcon(this.props.icon) : this.props.title}
      </a>
    )
  }
}