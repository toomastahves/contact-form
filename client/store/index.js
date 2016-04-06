import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers/';
import sagas from '../sagas/';

const createStoreWithMiddleware = compose(
  applyMiddleware(createSagaMiddleware(sagas)),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
