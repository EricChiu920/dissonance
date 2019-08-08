import { RECEIVE_MESSAGE, REMOVE_MESSAGE } from '../../actions/messageActions';
import { RECEIVE_CHANNEL } from '../../actions/channelActions';

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
    case RECEIVE_CHANNEL: {
      const { payload: { messages } } = action;

      return Object.assign({}, oldState, messages);
    }
    default:
      return oldState;
  }
};

export default messageReducer;

export const channelMessagesSelector = (state, channelId) => {
  const { entities: { channels, messages } } = state;
  const channel = channels[channelId] || {};
  const { messageIds = [] } = channel;

  return messageIds.map(id => messages[id]).filter(message => message !== undefined);
};
