import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import axios from '../../utils/axios';
import { IAppplicationState } from '../../reducers';
import { setSummary, setSubscribedIngredients, setWatchedIngredients } from '../../actions/overview.actions';

export function getSummary() {
  return async (dispatch: Dispatch<any>, getState: () => IAppplicationState) => {
    const URL = `/user`;
    try {
      const response: AxiosResponse = await axios.get(URL);

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
      const response: AxiosResponse = await axios.get(URL);

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
      const response: AxiosResponse = await axios.get(URL);

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
      const response: AxiosResponse = await axios.post(URL, data);

      dispatch(setSubscribedIngredients(response.data));
    } catch (e) {
      throw e;
    }
  };
}
