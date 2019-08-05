import { RECEIVE_CURRENT_USER } from '../../actions/sessionActions';
import {
  CREATE_SERVER,
  REMOVE_SERVER,
  JOIN_SERVER,
  LEAVE_SERVER,
} from '../../actions/serverActions';

const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      const { user: { id }, user } = action.payload;
      return Object.assign({}, oldState, { [id]: user });
    }
    case CREATE_SERVER: {
      // debugger;
      const { server: { owner_id: ownerId, id } } = action;
      const newUser = Object.assign({}, oldState[ownerId]);
      newUser.joinedServers = newUser.joinedServers.slice();
      newUser.joinedServers.push(id);

      return Object.assign({}, oldState, { [ownerId]: newUser });
    }
    case REMOVE_SERVER: {
      const { server: { id, owner_id: ownerId } } = action;
      const newUser = Object.assign({}, oldState[ownerId]);
      newUser.joinedServers = newUser.joinedServers.slice();
      const idx = newUser.joinedServers.indexOf(id);
      newUser.joinedServers.splice(idx, 1);

      return Object.assign({}, oldState, { [ownerId]: newUser });
    }
    case JOIN_SERVER: {
      debugger
      // const { server: { server } } = action;
      // const newUser = Object.assign({}, oldState[ownerId]);
      return oldState;
    }
    case LEAVE_SERVER: {
      
    }
    default:
      return oldState;
  }
};

export default userReducer;
