/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
import * as SessionAPIUtil from '../util/sessionAPIUtil';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_NEW_USER = 'RECEIVE_NEW_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveNewuser = (payload) => {
  return {
    type: RECEIVE_NEW_USER,
    payload,
  };
};

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

const receiveUser = (payload) => {
  return {
    type: RECEIVE_CURRENT_USER,
    payload,
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

export const clearSessionErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS,
  };
};

export const fetchAllUsers = () => (dispatch) => {
  return SessionAPIUtil.fetchAllUsers()
    .then(users => dispatch(receiveUsers(users)));
};

export const fetchUser = (userId) => (dispatch) => {
  return SessionAPIUtil.fetchUser(userId)
    .then(payload => dispatch(receiveNewuser(payload)));
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
