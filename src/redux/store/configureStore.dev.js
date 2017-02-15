import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
// import thunk from 'redux-thunk';
import rootReducer from '../modules/index';
// import ApiClient from '../../helpers/ApiClient';
// import createMiddleware from '../middleware/clientMiddleware';

// const client = new ApiClient();
const RoutingMiddleware = routerMiddleware(browserHistory);

const finalCreateStore = compose(
  applyMiddleware(
    // thunk,
    // createMiddleware(client),
    RoutingMiddleware,
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)(createStore);


export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
