import { RECEIVE_CURRENT_USER } from '../actions/sessionActions';

const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      const { user: { id }, user } = action;

      return Object.assign({}, oldState, { [id]: user });
    }
    default:
      return oldState;
  }
};

export default userReducer;
