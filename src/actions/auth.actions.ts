import { Actions } from '../constants/actions';

export const loginSuccess = (payload: any) => ({
  type: Actions.authActions.LOGIN_SUCCESS,
  payload
});

export const loginFailure = () => ({
  type: Actions.authActions.LOGIN_FAILURE
});
