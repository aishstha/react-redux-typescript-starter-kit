import { Dispatch } from 'redux';
import Axios, { AxiosResponse } from 'axios';
import { stringify } from 'querystring';

import http from '../../utils/http';
import { IAppplicationState } from '../../reducers';
import { addNewReport } from '../../actions/admin.actions';

export function addProduct(data: any) {
  return async (dispatch: Dispatch<any>, getState: () => IAppplicationState) => {
    const URL = '/user/product';
    try {
      const response: AxiosResponse = await http.post(URL, data);

      dispatch(addNewReport(data));
    } catch (e) {
      throw e;
    }
  };
}
