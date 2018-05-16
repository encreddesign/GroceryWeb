import React from "react";
import { Link } from "react-router-dom";
import icons from "../helpers/Icons";

/**
 * @class RouteLink
 */
export default class RouteLink extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to={this.props.route} title={this.props.title}>
        {this.props.icon ? icons(this.props.icon) : this.props.title}
      </Link>
    )
  }
}