import { RECEIVE_MESSAGE, REMOVE_MESSAGE } from '../../actions/messageActions';

const messageReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_MESSAGE: {
      const { message: { id }, message } = action;
      return Object.assign({}, oldState, { [id]: message });
    }
    case REMOVE_MESSAGE: {
      const newState = Object.assign({}, oldState);
      const { message: { id } } = action;
      delete newState[id];

      return newState;
    }
    default:
      return oldState;
  }
};

export default messageReducer;
