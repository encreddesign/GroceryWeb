import React from "react";
import Sidepanel from "../layout/Sidepanel";
import GroceryItems from "../layout/GroceryItems";
import Login from "../layout/Login";
import DropboxAuth from "../dropbox/DropboxAuth";

/**
 * @class Site
 */
export default class Site extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: true,
      dropboxAuth: null
    };
  }

  componentDidMount() {
    this.dropboxAuth = new DropboxAuth();

    if(this.dropboxAuth.getAuthURL()) {
      this.setState({
        loggedIn: false,
        dropboxAuth: this.dropboxAuth
      });
    }
  }

  render() {
    return (
      <div className="l-app">
        <Sidepanel title="My Lists" />
        <GroceryItems />
        {!this.state.loggedIn && <Login title="Login to your Dropbox Account" dropboxAuth={this.state.dropboxAuth} />}
      </div>
    )
  }
}