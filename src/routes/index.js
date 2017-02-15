import React from 'react';
import { Route } from 'react-router';
import App from '../components/App/App';
import Home from '../containers/Home/Home';

export default (store) => {
  return (
    <Route component={App} >
      <Route
        path="/login" component={Home}
      />
      <Route
        path="/" component={Home}
      />
    </Route>
  );
};
