import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import './index.css';
import getRoutes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState (state) {
    return state.get('routing').toJS();
  },
});

const routes = getRoutes(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
