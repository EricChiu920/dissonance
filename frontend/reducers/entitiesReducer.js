import { combineReducers } from 'redux';
import usersReducer from './sessionReducers/userReducer';
import serverReducer from './serverReducers/serverReducers';
import channelReducer from './channelReducers/channelReducer';
import messageReducer from './messageReducers/messageReducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serverReducer,
  channels: channelReducer,
  messages: messageReducer,
});

export default entitiesReducer;
