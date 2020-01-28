import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import axios from '../../utils/axios';
import { IAppplicationState } from '../../reducers';
import { loginSuccess, loginFailure } from '../../actions/auth.actions';
import { ILogin } from '../../components/interface/auth.interface';
import { stringify } from 'querystring';

export function login(username: string, password: string) {
  return async (dispatch: Dispatch<any>, getState: () => IAppplicationState) => {
    const URL = `/user/token`;
    try {
      const response: AxiosResponse = await axios.post(
        URL,
        stringify({
          username,
          password
        })
      );

      dispatch(loginSuccess(response.data));
    } catch (e) {
      loginFailure();
      throw e;
    }
  };
}
