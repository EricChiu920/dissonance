/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
import * as SessionAPIUtil from '../util/sessionAPIUtil';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  };
};

export const signup = (newUser) => (dispatch) => {
  return SessionAPIUtil.signup(newUser)
    .then(
      user => dispatch(receiveUser(user)),
      err => dispatch(receiveSessionErrors(err.responseJSON)),
    );
};

export const login = (loginUser) => (dispatch) => {
  return SessionAPIUtil.login(loginUser)
    .then(
      user => dispatch(receiveUser(user)),
      err => dispatch(receiveSessionErrors(err.responseJSON)),
    );
};

export const logout = () => (dispatch) => {
  return SessionAPIUtil.logout()
    .then(
      () => dispatch(logoutUser()),
      err => dispatch(receiveSessionErrors(err.responseJSON)),
    );
};