import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  /* TESTING */
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  /* TESTING */

  ReactDOM.render(<h1>Welcome to dissonance</h1>, root);
});
