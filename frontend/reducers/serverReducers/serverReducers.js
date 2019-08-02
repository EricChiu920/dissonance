import { RECEIVE_ALL_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from '../../actions/serverActions';

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
    case REMOVE_SERVER: {
      const { id } = action;
      const newState = Object.assign({}, oldState);
      delete newState[id];

      return newState;
    }
    default:
      return oldState;
  }
};

export default serverReducer;
