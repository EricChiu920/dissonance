import * as ChannelAPIUtil from '../util/channelAPIUtil';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const CLEAR_CHANNEL_ERRORS = 'CLEAR_CHANNEL_ERRORS';

const receiveChannel = (channel) => {
  return {
    type: RECEIVE_CHANNEL,
    channel,
  };
};

const removeChannel = (channel) => {
  return {
    type: REMOVE_CHANNEL,
    channel,
  };
};

const receiveChannelErrors = (errors) => {
  return {
    type: RECEIVE_CHANNEL_ERRORS,
    errors,
  };
};

export const clearChannelErrors = () => {
  return {
    type: CLEAR_CHANNEL_ERRORS,
  };
};

export const fetchChannel = id => (dispatch) => {
  return ChannelAPIUtil.fetchChannel(id)
    .then(channel => dispatch(receiveChannel(channel)))
    .fail(err => dispatch(receiveChannelErrors(err.responseJSON)));
};

export const createChannel = channel => (dispatch) => {
  return ChannelAPIUtil.createChannel(channel)
    .then(newChannel => dispatch(receiveChannel(newChannel)))
    .fail(err => dispatch(receiveChannelErrors(err.responseJSON)));
};

export const updateChannel = channel => (dispatch) => {
  return ChannelAPIUtil.updateChannel(channel)
    .then(editedChannel => dispatch(receiveChannel(editedChannel)))
    .fail(err => dispatch(receiveChannelErrors(err.responseJSON)));
};

export const deleteChannel = channel => (dispatch) => {
  return ChannelAPIUtil.deleteChannel(channel)
    .then(deletedChannel => dispatch(removeChannel(deletedChannel)))
    .fail(err => dispatch(receiveChannelErrors(err.responseJSON)));
};
