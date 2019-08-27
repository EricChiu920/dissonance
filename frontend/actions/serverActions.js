import * as ServerAPIUtils from '../util/serverAPIUtil';

export const RECEIVE_ALL_SERVERS = 'RECEIVE_ALL_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const CREATE_SERVER = 'CREATE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';
export const JOIN_SERVER = 'JOIN_SERVER';
export const LEAVE_SERVER = 'LEAVE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';
export const CLEAR_SERVER_ERRORS = 'CLEAR_SERVER_ERRORS';

const receiveAllServers = (servers) => {
  return {
    type: RECEIVE_ALL_SERVERS,
    servers,
  };
};

const receiveServer = (payload) => {
  return {
    type: RECEIVE_SERVER,
    payload,
  };
};

export const receiveNewServer = (payload) => {
  return {
    type: CREATE_SERVER,
    payload,
  };
};

const removeServer = (payload) => {
  return {
    type: REMOVE_SERVER,
    payload,
  };
};

const receiveJoinedServer = (server) => {
  return {
    type: JOIN_SERVER,
    server,
  };
};

const receiveLeftServer = (server) => {
  return {
    type: LEAVE_SERVER,
    server,
  };
};

export const receiveServerErrors = (errors) => {
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
    .then(payload => dispatch(receiveServer(payload)))
    .fail(err => dispatch(receiveServerErrors(err.responseJSON)));
};

export const createServer = newServer => (dispatch) => {
  return ServerAPIUtils.createServer(newServer)
    .then(payload => dispatch(receiveNewServer(payload)))
    .fail(err => dispatch(receiveServerErrors(err.responseJSON)));
};

export const updateServer = editedServer => (dispatch) => {
  return ServerAPIUtils.updateServer(editedServer)
    .then(payload => dispatch(receiveServer(payload)))
    .fail(err => dispatch(receiveServerErrors(err.responseJSON)));
};

export const deleteServer = server => (dispatch) => {
  return ServerAPIUtils.deleteServer(server)
    .then(payload => dispatch(removeServer(payload)))
    .fail(err => dispatch(receiveServerErrors(err.responseJSON)));
};

export const joinServer = server => (dispatch) => {
  return ServerAPIUtils.joinServer(server)
    .then(joinedServer => dispatch(receiveJoinedServer(joinedServer)))
    .fail(err => dispatch(receiveServerErrors(err.responseJSON)));
};

export const leaveServer = server => (dispatch) => {
  return ServerAPIUtils.leaveServer(server)
    .then(leftServer => dispatch(receiveLeftServer(leftServer)))
    .fail(err => dispatch(receiveServerErrors(err.responseJSON)));
};
