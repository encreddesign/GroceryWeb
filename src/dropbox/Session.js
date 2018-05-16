/**
 * @class Session
 */
export default class Session {

  constructor(sessionKey, expire = 30) {
    this.sessionKey = sessionKey;
    this.cookies = document.cookie;
    this.expire = expire;
  }

  /**
   * Sets session and value
   * @param {String} token
   */
  setSession(token) {
    if(!token) {
      return;
    }

    const date = new Date();

    date.setTime(date.getTime() + (this.expire * 24 * 60 * 60 * 1000));

    document.cookie = `${this.sessionKey}=${token}; expires=${date.toUTCString()}; path=/;`;
  }

  /**
   * Returns boolean based on session set or not
   * @return {Boolean}
   */
  isSet() {
    const cookies = this.cookiesKeyValue();

    if(cookies.get(this.sessionKey)) {
      return true;
    }

    return false;
  }

  /**
   * Returns a map of available cookies
   * @return {Map}
   */
  cookiesKeyValue() {
    const map = new Map();
    const eachCookie = this.cookies.split(";");

    if(eachCookie.length > 0) {
      for(let eachCookieI = 0; eachCookieI < eachCookie.length; eachCookieI++) {
        const keyValue = eachCookie[eachCookieI].split("=");
        
        if(keyValue.length > 0) {
          map.set(keyValue[0], keyValue[1]);
        }
      }
    }

    return map;
  }
}