import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';

export const LOGIN = 'AUTH/LOGIN';
export const LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'AUTH/LOGIN_FAIL';
export const LOAD = 'AUTH/LOAD';
export const LOAD_SUCCESS = 'AUTH/LOAD_SUCCESS';
export const LOAD_FAIL = 'AUTH/LOAD_FAIL';
export const LOGOUT = 'AUTH/LOGOUT';

const token = (state = null, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.result.token);
      return action.result.token;
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case LOGIN:
      return true;
    case LOGIN_SUCCESS:
    case LOGIN_FAIL:
    case LOAD_SUCCESS:
    case LOAD_FAIL:
      return false;
    default:
      return state;
  }
};

const user = (state = null, action) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      return Immutable.fromJS(action.result);
    case LOGOUT:
      return null;
    default:
      return state;
  }
};

const reducer = combineReducers({
  loading,
  token,
  user,
});

export default reducer;
