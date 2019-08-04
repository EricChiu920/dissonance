import { RECEIVE_ALL_SERVERS, RECEIVE_SERVER, CREATE_SERVER, REMOVE_SERVER } from '../../actions/serverActions';
import { RECEIVE_CURRENT_USER } from '../../actions/sessionActions';

const serverReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_SERVERS: {
      const { servers } = action;

      return Object.assign({}, oldState, servers);
    }
    case RECEIVE_SERVER: {
      const { server: { id }, server } = action;

      return Object.assign({}, oldState, { [id]: server });
    }
    case CREATE_SERVER: {
      const { server: { id }, server } = action;

      return Object.assign({}, oldState, { [id]: server });
    }
    case RECEIVE_CURRENT_USER: {
      const { servers } = action.payload;

      return Object.assign({}, oldState, servers);
    }
    case REMOVE_SERVER: {
      const { server: { id } } = action;
      const newState = Object.assign({}, oldState);
      delete newState[id];

      return newState;
    }
    default:
      return oldState;
  }
};

export default serverReducer;

export const userServerNamesSelector = (state) => {
  const { session: { id }, entities: { users, servers } } = state;
  const currentUser = users[id];

  return currentUser.joinedServers.map((serverId) => {
    const server = servers[serverId];

    return {
      id: serverId,
      name: server.name,
    };
  });
};
