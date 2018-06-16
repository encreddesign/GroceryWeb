import * as types from '../actions/actionTypes';

/**
 * Authentication Reducer
 */
export default function authReducer(state = initialState, action = {}) {
  switch(action.type) {
    case types.USER_AUTHENTICATED:
      return {
        ...initialState,
        authInfo: action.authInfo
      };
    default:
      return state;
  }
}