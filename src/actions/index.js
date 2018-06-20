import DropboxAuth from "../dropbox/DropboxAuth";
import * as types from "./actionTypes";

/**
 * Actions Index
 */
export function authenticateDropboxUser() {
  const dropboxAuth = new DropboxAuth();

  return dropboxAuth.authenticateUser(dropboxAuth.getAuthCode()).then((response) => {
    const authInfo = response.data;
    const authenticated = true;

      dropboxAuth.setTokenSession(response.data)
      .then(_ => Params.resetState())
      .catch(_ => console.error("User session failed, cannot set user cookie"));

      dispatch({ type: types.USER_AUTHENTICATED, authInfo, authenticated });
    }).catch((error) => {
      // this.setState({
      //   apiMessage: "Unable to connect to Dropbox"
      // });

      console.error(`${DropboxConfig().tag}: ${error.message}`);
    });
}