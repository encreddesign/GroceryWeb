import React from "react";
import { Dropbox } from "dropbox/src";
import Session from "./Session";
import DropboxAuthFlow from "./DropboxAuthFlow";
import DropboxConfig from "./DropboxConfig";

/**
 * @class DropboxAuth
 */
export default class DropboxAuth {

  constructor() {
    this.tokenSession = "_grocery_dropbox_session";
    this.session = new Session(this.tokenSession);
  }

  /**
   * Returns authorizing url
   * @return {String}
   */
  getAuthURL() {
    if(!this.session.isSet()) {
      return DropboxAuthFlow.requestCode(DropboxConfig().security.clientId);
    }

    return null;
  }

  /**
   * Authenticate user by code
   * @param {String} code 
   */
  authenticateUser(code) {
    window.location.href = DropboxAuthFlow.requestToken(code);
  }
}