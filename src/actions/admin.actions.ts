import { Actions } from '../constants/actions';

export const selectReport = (payload: any) => ({
  type: Actions.adminActions.SELECT_REPORT,
  payload
});

export const addNewReport = (payload: any) => ({
  type: Actions.adminActions.ADD_NEW_REPORT,
  payload
});

export const setReport = (payload: any) => ({
  type: Actions.adminActions.SET_REPORT,
  payload
});
