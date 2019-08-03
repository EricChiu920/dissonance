import { combineReducers } from 'redux';
import entitiesReducer from './entitiesReducer';
import sessionReducer from './sessionReducers/sessionReducer';
import errorsReducer from './errorsReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer,
});

export default rootReducer;
