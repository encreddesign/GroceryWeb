import React from "react";

/**
 * @class Login
 */
export default class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      redirecting: false,
      authenticating: false,
      authorizeUrl: null
    };
  }
  componentDidMount() {
    
  }

  render() {
    if(!this.state.authenticating) {
      setTimeout(() => {
        this.setState({
          redirecting: true
        })
      }, 1000);

      if(this.state.redirecting) {
        window.location.href = this.props.dropboxAuth.getAuthURL();
      }
    }

    return (
      <div className="l-login">
        <div className="l-login__wrapper">
          <div className="l-login__loader"></div>
          <h3 className="l-login__label">Redirecting to Dropbox...</h3>
        </div>
      </div>
    )
  }
}