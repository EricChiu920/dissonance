import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { createMessage, updateMessage, deleteMessage } from './util/messageAPIUtil';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const { user: { id }, user, servers } = window.currentUser;

    const preloadedState = {
      entities: {
        users: { [id]: user },
        servers,
      },
      session: { id },
    };

    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  /* TESTING */
  window.createMessage = createMessage;
  window.updateMessage = updateMessage;
  window.deleteMessage = deleteMessage;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  /* TESTING */

  ReactDOM.render(<Root store={store} />, root);
});
