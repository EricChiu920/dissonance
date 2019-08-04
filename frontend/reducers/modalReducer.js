import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modalActions';

const modalReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      const { modal } = action;

      return modal;
    }
    case CLOSE_MODAL: {
      return null;
    }
    default:
      return state;
  }
};

export default modalReducer;
