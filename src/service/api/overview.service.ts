import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import { setSummary, setSubscribedIngredients } from '../../actions/overview.actions';

import axios from '../../utils/axios';
import { IAppplicationState } from '../../reducers';

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
    const URL = `/user/product`;
    try {
      const response: AxiosResponse = await axios.get(URL);
      console.log('resposne', response.data);
      dispatch(setSubscribedIngredients(response.data));
    } catch (e) {
      throw e;
    }
  };
}
