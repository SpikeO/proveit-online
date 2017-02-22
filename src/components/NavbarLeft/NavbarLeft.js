import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import IconHome from 'react-icons/lib/ti/home-outline';
import IconLogin from 'react-icons/lib/ti/power';
import styles from './NavbarLeft.style';

const NavbarLeft = ({ userObj }) => (
  <div style={styles.navbarLeft}>
    Left navbar
    <Link to="/" style={styles.box}>
      <div style={styles.boxInnerCenter}>
        <div><IconHome size={30} /></div>
        <span style={styles.link}>Home</span>
      </div>
    </Link>
    {!userObj &&
    <Link to="/login" style={styles.box}>
      <div style={styles.boxInnerCenter}>
        <div><IconLogin size={30} /></div>
        <span style={styles.link}>Login</span>
      </div>
    </Link>
    }
  </div>
);

export default Radium(NavbarLeft);