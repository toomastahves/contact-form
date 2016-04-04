import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/';


import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/';

const createStoreWithMiddleware = compose(
  applyMiddleware(createSagaMiddleware(rootSaga)),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
