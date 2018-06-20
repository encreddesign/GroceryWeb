import * as types from "../actions/actionTypes";

const initialState = {
  authInfo: undefined,
  authenticated: false
};

/**
 * Authentication Reducer
 */
export default function authReducer(state = initialState, action = {}) {
  switch(action.type) {
    case types.USER_AUTHENTICATED:
      return {
        ...state,
        authenticated: action.authenticated,
        authInfo: action.authInfo,
      };
    default:
      return state;
  }
}