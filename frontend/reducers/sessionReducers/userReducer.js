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
      newUser.joinedServers.slice().push(id);

      return Object.assign({}, oldState, { [ownerId]: newUser });
    }
    default:
      return oldState;
  }
};

export default userReducer;
