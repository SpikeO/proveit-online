import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { load as loadAuth } from '../../redux/modules/auth/actions';
import styles from './App.style';
import NavbarTop from '../../components/NavbarTop/NavbarTop';
import NavbarLeft from '../../components/NavbarLeft/NavbarLeft';

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
      <div style={styles.container}>
        <NavbarTop />
        <NavbarLeft userObj={userObj} />
        <div style={styles.containerInner}>
          <h1>container</h1>
          {children}
        </div>
        <div style={styles.navbarBottom}>
          Bottom navbar
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
)(Radium(App));
