import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../../actions/channelActions';

const channelReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CHANNEL: {
      const { channel: { id }, channel } = action;

      return Object.assign({}, oldState, { [id]: channel });
    }
    case REMOVE_CHANNEL: {
      const { channel: { id } } = action;
      const newState = Object.assign({}, oldState);
      delete newState[id];

      return newState;
    }
    default:
      return oldState;
  }
};

export default channelReducer;
