import React, { PropTypes } from 'react';

class Login extends React.Component {
  state = {
    fieldEmail: '',
    fieldPassword: '',
  };

  handleEmailChange= (event) => {
    this.setState({ fieldEmail: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ fieldPassword: event.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.fieldEmail, this.state.fieldPassword);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>Username:</label>
          <input type="email" name="email" onChange={this.handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" onChange={this.handlePasswordChange} />
        </div>
        <div>
          <input type="submit" value="Log In" />
        </div>
      </form>
    );
  }
}
Login.propTypes = {
  login: PropTypes.func,
};

export default Login;
