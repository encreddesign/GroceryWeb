import React from "react";
import RouteLink from "./RouteLink";

/**
 * @class Toolbar
 */
export default class Toolbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
      <div className="c-toolbar">
        <h2 className="c-toolbar__title">{this.props.prefix} {this.props.userName}</h2>
        <div className="c-toolbar__links">
          <RouteLink route="/user/account" title="My Account" icon="user-account"/>
        </div>
      </div>
    )
  }
}