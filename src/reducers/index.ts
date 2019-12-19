import { History } from 'history';
import { combineReducers } from 'redux';
import { RouterState, connectRouter } from 'connected-react-router';

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
    overviewReducer
  });

export interface ISimpleReducer {}
export interface IOverviewReducer {}

export interface IAppplicationState {
  router: RouterState;
  overviewReducer: IOverviewReducer;
}
export default createRootReducer;
