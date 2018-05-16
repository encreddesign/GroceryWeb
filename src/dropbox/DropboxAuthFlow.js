import DropboxConfig from "./DropboxConfig";

/**
 * @class DropboxAuthFlow
 */
export default class DropboxAuthFlow {

  /**
   * Returns code flow URL
   * @param {String} clientId
   * @param {String} redirectURI
   * @return {String}
   */
  static requestCode(clientId, redirectURI = 'http://localhost:8080') {
    return DropboxConfig().urls.domain + DropboxConfig().urls.authCodeEndpoint + `?response_type=code&client_id=${clientId}&redirect_uri=${redirectURI}`;
  }

  /**
   * Returns token flow URL
   * @param {String} code 
   * @param {String} redirectURI
   * @return {String}
   */
  static requestToken(code, redirectURI = 'http://localhost:8080') {
    return DropboxConfig().urls.domain + DropboxConfig().urls.authTokenEndpoint + `?code=${code}&grant_type=authorization_code&redirect_uri=${redirectURI}`;
  }
}