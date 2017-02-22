import React from 'react';
import { Route } from 'react-router';
import App from '../containers/App/App';
import Home from '../containers/Home/Home';
import Login from '../containers/Login/Login';

export default (store) => {
  return (
    <Route component={App} >
      <Route
        path="/login" component={Login}
      />
      <Route
        path="/" component={Home}
      />
    </Route>
  );
};
