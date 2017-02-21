import * as types from './reducer';

export function load() {
  return {
    types: [types.LOAD, types.LOAD_SUCCESS, types.LOAD_FAIL],
    promise: (client) => client.get('/user')
  };
}

export function login(
  email, password
) {
  return {
    types: [types.LOGIN, types.LOGIN_SUCCESS, types.LOGIN_FAIL],
    promise: client => client.post('/auth/login', {
      data: { email, password },
    }),
  };
}

export function logout() {
  localStorage.removeItem('token');
  return {
    type: types.LOGOUT
  };
}
