import * as types from './actionTypes';

/**
 * Actions Index
 */
export function authenticateDropboxUser(dropboxInstance, authCode, storeSession) {
  return dispatch => {
    dropboxInstance.authenticateUser(authCode)
      .then((response) => {
        storeSession(response.data);

        dispatch({ type: types.USER_AUTHENTICATED, authInfo: response.data});
      }).catch((error) => {
        // this.setState({
        //   apiMessage: "Unable to connect to Dropbox"
        // });

        console.error(`${DropboxConfig().tag}: ${error.message}`);
      });
  }
}