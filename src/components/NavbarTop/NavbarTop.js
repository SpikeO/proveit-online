import React from 'react';
import Radium from 'radium';
import styles from './NavbarTop.style';

const NavbarTop = () => (
  <div style={styles.container}>
    <div>
      Logo
    </div>
    <div>
      Search bar
    </div>
    <div>
      <div>Add Topic</div>
      <div>Add Fact</div>
    </div>
    <div>Notifications</div>
    <div>Profile</div>
  </div>
);

export default Radium(NavbarTop);