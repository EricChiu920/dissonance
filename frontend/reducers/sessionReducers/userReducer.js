import { RECEIVE_CURRENT_USER } from '../../actions/sessionActions';
import {
  CREATE_SERVER,
  REMOVE_SERVER,
  JOIN_SERVER,
  LEAVE_SERVER,
} from '../../actions/serverActions';
import { RECEIVE_CHANNEL } from '../../actions/channelActions';

const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      const { user: { id }, user } = action.payload;
      return Object.assign({}, oldState, { [id]: user });
    }
    case CREATE_SERVER: {
      const { payload: { server: { owner_id: ownerId, id } } } = action;
      const newUser = Object.assign({}, oldState[ownerId]);
      newUser.joinedServers = newUser.joinedServers.slice();
      newUser.createdServers = newUser.createdServers.slice();
      newUser.joinedServers.push(id);
      newUser.createdServers.push(id);

      return Object.assign({}, oldState, { [ownerId]: newUser });
    }
    case REMOVE_SERVER: {
      const { payload: { server: { id, owner_id: ownerId } } } = action;
      const newUser = Object.assign({}, oldState[ownerId]);
      newUser.joinedServers = newUser.joinedServers.slice();
      const idx = newUser.joinedServers.indexOf(id);
      newUser.joinedServers.splice(idx, 1);

      return Object.assign({}, oldState, { [ownerId]: newUser });
    }
    case JOIN_SERVER: {
      const { server: { serverId, userId } } = action;
      const newUser = Object.assign({}, oldState[userId]);
      newUser.joinedServers = newUser.joinedServers.slice();
      newUser.joinedServers.push(serverId);

      return Object.assign({}, oldState, { [userId]: newUser });
    }
    case LEAVE_SERVER: {
      const { server: { serverId, userId } } = action;
      const newUser = Object.assign({}, oldState[userId]);
      newUser.joinedServers = newUser.joinedServers.slice();
      const idx = newUser.joinedServers.indexOf(serverId);
      newUser.joinedServers.splice(idx, 1);

      return Object.assign({}, oldState, { [userId]: newUser });
    }
    case RECEIVE_CHANNEL: {
      const { payload: { messageAuthors } } = action;

      return Object.assign({}, oldState, messageAuthors);
    }
    default:
      return oldState;
  }
};

export default userReducer;
