import { combineReducers } from 'redux-immutable';
import auth from './auth/reducer';
import routing from './routing';

const rootReducer = combineReducers({
  auth,
  routing,
});

export default rootReducer;
