import * as ServerAPIUtils from '../util/serverAPIUtil';

export const RECEIVE_ALL_SERVERS = 'RECEIVE_ALL_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';
export const CLEAR_SERVER_ERRORS = 'CLEAR_SERVER_ERRORS';

const receiveAllServers = (servers) => {
  return {
    type: RECEIVE_ALL_SERVERS,
    servers,
  };
};

const receiveServer = (server) => {
  return {
    type: RECEIVE_SERVER,
    server,
  };
};

const removeServer = (id) => {
  return {
    type: REMOVE_SERVER,
    id,
  };
};

const receiveServerErrors = (errors) => {
  return {
    type: RECEIVE_SERVER_ERRORS,
    errors,
  };
};

export const clearServerErrors = () => {
  return {
    type: CLEAR_SERVER_ERRORS,
  };
};

export const fetchAllServers = () => (dispatch) => {
  return ServerAPIUtils.fetchAllServers()
    .then(servers => dispatch(receiveAllServers(servers)))
    .fail(err => dispatch(receiveServerErrors(err.responseJSON)));
};

export const fetchServer = id => (dispatch) => {
  return ServerAPIUtils.fetchServer(id)
    .then(server => dispatch(receiveServer(server)))
    .fail(err => dispatch(receiveServerErrors(err.responseJSON)));
};

export const createServer = newServer => (dispatch) => {
  return ServerAPIUtils.createServer(newServer)
    .then(server => dispatch(receiveServer(server)))
    .fail(err => dispatch(receiveServerErrors(err.responseJSON)));
};

export const updateServer = updatedServer => (dispatch) => {
  return ServerAPIUtils.updateServer(updatedServer)
    .then(server => dispatch(receiveServer(server)))
    .fail(err => dispatch(receiveServerErrors(err.responseJSON)));
};

export const deleteServer = id => (dispatch) => {
  return ServerAPIUtils.deleteServer(id)
    .then(() => dispatch(removeServer(id)))
    .fail(err => dispatch(receiveServerErrors(err.responseJSON)));
};
