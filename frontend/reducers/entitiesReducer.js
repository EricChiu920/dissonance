import { combineReducers } from 'redux';
import usersReducer from './sessionReducers/userReducer';
import serverReducer from './serverReducers/serverReducers';
import channelReducer from './channelReducers/channelReducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serverReducer,
  channels: channelReducer,
});

export default entitiesReducer;
