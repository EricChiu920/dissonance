import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/sessionActions';

const defaultState = {
  id: null,
};

const sessionReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      const { user: { id } } = action;

      return Object.assign({}, { id });
    }
    case LOGOUT_CURRENT_USER: {
      return defaultState;
    }
    default:
      return oldState;
  }
};

export default sessionReducer;
