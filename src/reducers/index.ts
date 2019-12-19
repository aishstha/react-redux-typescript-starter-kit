import { History } from 'history';
import { combineReducers } from 'redux';
import { RouterState, connectRouter } from 'connected-react-router';

import simpleReducer from './simpleReducer';
import overviewReducer from './overviewReducer';

export interface ReduxState {
  router: RouterState;
}

/**
 * Creates a combination of all the reducers for the application
 * @param {History} history History object
 */
const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    simpleReducer,
    overviewReducer
  });

export interface ISimpleReducer {}
export interface IOverviewReducer {}

export interface IAppplicationState {
  router: RouterState;
  simpleReducer: ISimpleReducer;
  overviewReducer: IOverviewReducer;
}
export default createRootReducer;
