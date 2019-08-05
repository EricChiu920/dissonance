import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { fetchAllServers, fetchServer, createServer, updateServer, deleteServer, joinServer, leaveServer } from './actions/serverActions';
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
  window.fetchAllServers = fetchAllServers;
  window.fetchServer = fetchServer;
  window.createServer = createServer;
  window.updateServer = updateServer;
  window.deleteServer = deleteServer;
  window.joinServer = joinServer;
  window.leaveServer = leaveServer;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  /* TESTING */

  ReactDOM.render(<Root store={store} />, root);
});
