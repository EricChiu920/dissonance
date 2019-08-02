import { RECEIVE_SERVER_ERRORS, CLEAR_SERVER_ERRORS, RECEIVE_SERVER } from '../../actions/serverActions';

const serverErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SERVER_ERRORS: {
      const { errors } = action;

      return errors.slice();
    }
    case RECEIVE_SERVER: {
      return [];
    }
    case CLEAR_SERVER_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default serverErrorsReducer;
