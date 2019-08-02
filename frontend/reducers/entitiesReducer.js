import { combineReducers } from 'redux';
import usersReducer from './sessionReducers/userReducer';
import serverReducer from './serverReducers/serverReducers';

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serverReducer,
});

export default entitiesReducer;
