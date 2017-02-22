import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';
import { load as loadAuth } from '../../redux/modules/auth/actions';

class App extends Component {
  static propTypes = {
    token: PropTypes.string,
    userObj: PropTypes.object,
  };

  componentDidMount() {
    if (!this.props.token && localStorage.getItem('token')) {
      this.props.loadAuth();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.token && nextProps.token) {
      this.props.loadAuth();
    } else if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState('/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/');
    }
  }

  render() {
    const { children, userObj } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Link to="/">Home</Link>
          {!userObj && <Link to="/login">Login</Link>}
        </div>
        <div>
          {children}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    token: state.getIn(['auth', 'token']),
    userObj: state.getIn(['auth', 'user']),
  }),
  { loadAuth },
)(App);
