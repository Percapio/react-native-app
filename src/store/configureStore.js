import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const middlewares = [ thunk ];

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const configureStore = ( initialState = {} ) => (
  createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  )
);

export default configureStore;