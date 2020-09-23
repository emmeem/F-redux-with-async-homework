import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(promiseMiddleware, logger))
);

export default store;