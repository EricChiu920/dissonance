import * as ChannelAPIUtil from '../util/channelAPIUtil';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const CLEAR_CHANNEL_ERRORS = 'CLEAR_CHANNEL_ERRORS';

const receiveChannel = (payload) => {
  return {
    type: RECEIVE_CHANNEL,
    payload,
  };
};

const removeChannel = (payload) => {
  return {
    type: REMOVE_CHANNEL,
    payload,
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
    .then(payload => dispatch(receiveChannel(payload)))
    .fail(err => dispatch(receiveChannelErrors(err.responseJSON)));
};

export const createChannel = channel => (dispatch) => {
  return ChannelAPIUtil.createChannel(channel)
    .then(payload => dispatch(receiveChannel(payload)))
    .fail(err => dispatch(receiveChannelErrors(err.responseJSON)));
};

export const updateChannel = channel => (dispatch) => {
  return ChannelAPIUtil.updateChannel(channel)
    .then(payload => dispatch(receiveChannel(payload)))
    .fail(err => dispatch(receiveChannelErrors(err.responseJSON)));
};

export const deleteChannel = channel => (dispatch) => {
  return ChannelAPIUtil.deleteChannel(channel)
    .then(payload => dispatch(removeChannel(payload)))
    .fail(err => dispatch(receiveChannelErrors(err.responseJSON)));
};
