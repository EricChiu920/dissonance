import { combineReducers } from 'redux';
import usersReducer from './userReducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
});

export default entitiesReducer;
