import * as MessageAPIUtil from '../util/messageAPIUtil';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const RECEIVE_MESSAGE_ERRORS = 'RECEIVE_MESSAGE_ERRORS';
export const CLEAR_MESSAGE_ERRORS = 'CLEAR_MESSAGE_ERRORS';

const receiveMessage = (message) => {
  return {
    type: RECEIVE_MESSAGE,
    message,
  };
};

const removeMessage = (message) => {
  return {
    type: REMOVE_MESSAGE,
    message,
  };
};

const receiveMessageErrors = (errors) => {
  return {
    type: RECEIVE_MESSAGE_ERRORS,
    errors,
  };
};

export const clearMessageErrors = () => {
  return {
    type: CLEAR_MESSAGE_ERRORS,
  };
};

export const createMessage = message => (dispatch) => {
  return MessageAPIUtil.createMessage(message)
    .then(newMessage => dispatch(receiveMessage(newMessage)))
    .fail(err => dispatch(receiveMessageErrors(err.responseJSON)));
};

export const updateMessage = message => (dispatch) => {
  return 
}
