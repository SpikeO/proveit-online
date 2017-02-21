import React, { PropTypes } from 'react';
import LoginComponent from '../../components/Login/Login';
import { connect } from 'react-redux';
import { login } from '../../redux/modules/auth/actions';

const Login = ({ login }) => (
  <div>
    <h1>Login page</h1>
    <LoginComponent login={login} />
  </div>
);
Login.propTypes = {
  login: PropTypes.func,
};
const LoginRedux = connect(
  () => ({}),
  { login }
)(Login);

export default LoginRedux;
