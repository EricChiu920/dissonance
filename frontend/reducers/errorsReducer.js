import { combineReducers } from 'redux';
import sessionErrorsReducer from './sessionReducers/sessionErrorsReducer';
import serverErrorsReducer from './serverReducers/severErrorsReducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  server: serverErrorsReducer,
});

export default errorsReducer;
