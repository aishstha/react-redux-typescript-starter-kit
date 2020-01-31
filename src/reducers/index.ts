import { History } from 'history';
import { combineReducers } from 'redux';
import { RouterState, connectRouter } from 'connected-react-router';

// import overviewReducer from './overview.reducer';
// import authReducer from './auth.reducer';
import adminReducer from './admin.reducer';

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
    // overviewReducer,
    // authReducer,
    adminReducer
  });

export interface ISimpleReducer {}
export interface IOverviewReducer {}
export interface IAdminReducer {
  reports: any;
  selectedReportId: number;
  selectedReport: any;
}

export interface IAppplicationState {
  router: RouterState;
  overviewReducer: IOverviewReducer;
  authReducer: any;
  adminReducer: IAdminReducer;
}
export default createRootReducer;
