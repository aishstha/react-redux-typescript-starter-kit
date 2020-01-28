import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import * as tokenService from '../../service/token.service';

import http from '../../utils/axios';
import { IAppplicationState } from '../../reducers';
import { setSummary, setSubscribedIngredients, setWatchedIngredients } from '../../actions/overview.actions';

export function getSummary() {
  return async (dispatch: Dispatch<any>, getState: () => IAppplicationState) => {
    const URL = `/user`;
    let accessToken = tokenService.getAccessToken();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    };

    try {
      const response: AxiosResponse = await http.get(URL);

      dispatch(setSummary(response.data));
    } catch (e) {
      throw e;
    }
  };
}

export function getSubscribedIngredients() {
  return async (dispatch: Dispatch<any>, getState: () => IAppplicationState) => {
    const URL = '/user/ingredient/subscribed';
    try {
      const response: AxiosResponse = await http.get(URL);

      dispatch(setSubscribedIngredients(response.data));
    } catch (e) {
      throw e;
    }
  };
}

export function getWatchedIngredients() {
  return async (dispatch: Dispatch<any>, getState: () => IAppplicationState) => {
    const URL = `/user/ingredient/watched`;
    try {
      const response: AxiosResponse = await http.get(URL);

      dispatch(setWatchedIngredients(response.data));
    } catch (e) {
      throw e;
    }
  };
}

export function moveToWatchList(data: any) {
  return async (dispatch: Dispatch<any>, getState: () => IAppplicationState) => {
    const URL = `/user/ingredient/watched`;
    try {
      const response: AxiosResponse = await http.post(URL, data);

      dispatch(setSubscribedIngredients(response.data));
    } catch (e) {
      throw e;
    }
  };
}
