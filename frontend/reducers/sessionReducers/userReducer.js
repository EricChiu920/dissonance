import { RECEIVE_CURRENT_USER } from '../../actions/sessionActions';
import { CREATE_SERVER } from '../../actions/serverActions';

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

      const newState = Object.assign({}, oldState, { [ownerId]: newUser });
      return newState;
    }
    default:
      return oldState;
  }
};

export default userReducer;
