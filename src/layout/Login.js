import React from "react";
import { connect } from "react-redux";
import Params from "../helpers/Params";
import DropboxConfig from "../dropbox/DropboxConfig";
import { authenticateDropboxUser } from "../actions";

/**
 * @class Login
 */
class Login extends React.Component {

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

      this.props.loadUserInfo();
    }
  }

  render() {
    if(!this.state.authenticating && !this.props.authenticated) {
      setTimeout(() => {
        this.setState({
          redirecting: true
        })
      }, 1000);

      if(this.state.redirecting) {
        window.location.href = this.props.dropboxAuth.getAuthURL();
      }
    }

    if(!this.props.authenticated) {
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

function mapStateToProps(state) {
  return {
    authenticated: state.authenticated,
    authInfo: state.authInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadUserInfo() {
      dispatch(authenticateDropboxUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);