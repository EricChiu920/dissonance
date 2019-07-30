import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './actions/sessionActions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  store = configureStore();

  /* TESTING */
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  /* TESTING */

  ReactDOM.render(<h1>Welcome to dissonance</h1>, root);
});
