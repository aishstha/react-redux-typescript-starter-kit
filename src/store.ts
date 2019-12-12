import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';

import history from './utils/history';

import createRootReducer, { ReduxState } from './reducers/rootReducer';

/**
 * Create history middleware
 * This enables timetravel using redux devtools
 */
const historyMiddleware = routerMiddleware(history);

/**
 * Enables redux devtools except in production mode
 * Use redux composer if devtools does not exist
 */
const composeEnhancer =
  process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

/**
 * Takes initial redux state and creates a redux store
 * @param {ReduxState} preloadedState Initial redux state
 */
const configureStore = (preloadedState?: ReduxState) => {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(applyMiddleware(historyMiddleware))
  );

  return store;
};

export default configureStore;
