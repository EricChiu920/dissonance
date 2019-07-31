import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { signup, login, logout } from './actions/sessionActions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const { id } = window.currentUser;

    const preloadedState = {
      entities: {
        users: { [id]: window.currentUser },
      },
      session: { id },
    };

    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  /* TESTING */
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  /* TESTING */

  ReactDOM.render(<Root store={store} />, root);
});
