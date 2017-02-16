import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </div>
        <div>
          {children}
        </div>
      </div>
    );
  }
}

export default App;
