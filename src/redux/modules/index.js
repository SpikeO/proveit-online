import { combineReducers } from 'redux-immutable';
import auth from './auth';
import routing from './routing';

const rootReducer = combineReducers({
  auth,
  routing,
});

export default rootReducer;
