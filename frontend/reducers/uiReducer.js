import { combineReducers } from 'redux';
import modalReducer from './modalReducer';

const uiReducer = combineReducers({
  modals: modalReducer,
});

export default uiReducer;
