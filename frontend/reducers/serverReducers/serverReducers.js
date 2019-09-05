import {
  RECEIVE_ALL_SERVERS,
  RECEIVE_SERVER,
  CREATE_SERVER,
  JOIN_SERVER,
  LEAVE_SERVER,
  CLEAR_SERVERS,
} from '../../actions/serverActions';
import { RECEIVE_CURRENT_USER } from '../../actions/sessionActions';

const serverReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_SERVERS: {
      const { servers } = action;

      return Object.assign({}, oldState, servers);
    }
    case RECEIVE_SERVER: {
      const { payload: { server: { id }, server } } = action;

      return Object.assign({}, oldState, { [id]: server });
    }
    case CREATE_SERVER: {
      const { payload: { server: { id }, server } } = action;

      return Object.assign({}, oldState, { [id]: server });
    }
    case JOIN_SERVER: {
      const { server: { serverId } } = action;
      const updatedServer = Object.assign({}, oldState[serverId]);
      updatedServer.userCount += 1;

      return Object.assign({}, oldState, { [serverId]: updatedServer });
    }
    case LEAVE_SERVER: {
      const { server: { serverId } } = action;
      const updatedServer = Object.assign({}, oldState[serverId]);
      updatedServer.userCount -= 1;

      return Object.assign({}, oldState, { [serverId]: updatedServer });
    }
    case RECEIVE_CURRENT_USER: {
      const { servers } = action.payload;

      return Object.assign({}, oldState, servers);
    }
    case CLEAR_SERVERS: {
      return {};
    }
    default:
      return oldState;
  }
};

export default serverReducer;

export const userServerNamesSelector = (state, showPrivateServer) => {
  const { session: { id }, entities: { users, servers } } = state;
  const currentUser = users[id];

  const serverNames = [];

  if (!currentUser || !currentUser.joinedServers) {
    return [];
  }

  for (let i = 0; i < currentUser.joinedServers.length; i += 1) {
    const serverId = currentUser.joinedServers[i];
    const server = servers[serverId];

    if (server.privateServer === showPrivateServer) {
      serverNames.push({
        id: serverId,
        name: server.name,
      });
    }
  }

  return serverNames;
};

export const userCreatedServersSelector = (state) => {
  const { entities: { users }, session: { id } } = state;
  const currentUser = users[id];

  return currentUser.createdServers;
};
