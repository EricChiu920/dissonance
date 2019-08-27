import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../../actions/channelActions';
import { RECEIVE_SERVER } from '../../actions/serverActions';
import { RECEIVE_MESSAGE } from '../../actions/messageActions';

const channelReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CHANNEL: {
      const { payload: { channel: { id }, channel } } = action;

      return Object.assign({}, oldState, { [id]: channel });
    }
    case REMOVE_CHANNEL: {
      const { payload: { channel: { id } } } = action;
      const newState = Object.assign({}, oldState);
      delete newState[id];

      return newState;
    }
    case RECEIVE_SERVER: {
      const { payload: { channels } } = action;

      return Object.assign({}, oldState, channels);
    }
    case RECEIVE_MESSAGE: {
      const { message: { channelId, id } } = action;
      const newChannel = oldState[channelId];
      newChannel.messageIds = newChannel.messageIds.slice();
      newChannel.messageIds.push(id);

      return Object.assign({}, oldState, { [channelId]: newChannel });
    }
    default:
      return oldState;
  }
};

export default channelReducer;

export const serverChannelsSelector = (state, serverId) => {
  const { entities: { channels: allChannels } } = state;

  return Object.values(allChannels).filter(channel => (
    channel.serverId === Number(serverId)
  ));
};
