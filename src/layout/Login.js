import React from "react";
import Params from "../helpers/Params";
import DropboxConfig from "../dropbox/DropboxConfig";

/**
 * @class Login
 */
export default class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      authCode: null,
      redirecting: false,
      authenticating: false,
      authenticated: false,
      apiMessage: null
    };
  }

  componentDidMount() {
    const authCode = this.props.dropboxAuth.getAuthCode();

    if(authCode) {
      this.setState({
        authenticating: true
      });

      this.requestToken(authCode);
    }
  }

  storeSession(data) {
    if(data.access_token === null) {
      return;
    }

    this.props.dropboxAuth.setTokenSession(data.access_token)
      .then(() => {
        this.setState({
          authenticating: false,
          authenticated: true
        });

        Params.resetState();
      }).catch(() => {
        this.setState({
          apiMessage: "User session failed"
        });

        console.error("User session failed, cannot set user cookie");
      });
  }

  requestToken(authCode) {
    this.setState({
      apiMessage: "Authenticating User"
    });

    this.props.dropboxAuth.authenticateUser(authCode)
      .then((response) => {
        this.storeSession(response.data);
      }).catch((error) => {
        this.setState({
          apiMessage: "Unable to connect to Dropbox"
        });

        console.error(`${DropboxConfig().tag}: ${error.message}`);
      });
  }

  render() {
    if(!this.state.authenticating && !this.state.authenticated) {
      setTimeout(() => {
        this.setState({
          redirecting: true
        })
      }, 1000);

      if(this.state.redirecting) {
        window.location.href = this.props.dropboxAuth.getAuthURL();
      }
    }

    if(!this.state.authenticated) {
      return (
        <div className="l-login">
          <div className="l-login__wrapper">
            <div className="l-login__loader"></div>
            <h3 className="l-login__label">{this.state.apiMessage === null ? 'Redirecting to Dropbox...' : this.state.apiMessage}</h3>
          </div>
        </div>
      );
    }

    return (<div data-user="user-session"></div>)
  }
}