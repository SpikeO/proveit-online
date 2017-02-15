// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../modules/reducer';
// import ApiClient from '../../helpers/ApiClient';
// import createMiddleware from '../middleware/clientMiddleware';
//
// const client = new ApiClient();
// const finalCreateStore = compose(
//   applyMiddleware(thunk, createMiddleware(client)),
// )(createStore);
//
// export default function configureStore(initialState) {
//   return finalCreateStore(rootReducer, initialState);
// }
