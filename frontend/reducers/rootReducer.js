import { combineReducers } from 'redux';
import entitiesReducer from './entitiesReducer';
import sessionReducer from './sessionReducers/sessionReducer';
import errorsReducer from './errorsReducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
});

export default rootReducer;
