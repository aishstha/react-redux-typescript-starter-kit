import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import axios from '../../utils/axios';
import config from '../../config';
import { IAppplicationState } from '../../reducers';

// import { simpleAction, getAllProducts } from '../../actions/product.actions';

export function getAllProductaaas() {
  return async (dispatch: Dispatch): Promise<{}> => {
    try {
      const URL = `http://34.68.169.12:5000/users`;
      const response: AxiosResponse = await axios.get(URL);
      console.log('response', response);
      // dispatch({
      //   payload: response.data,
      //   type: Actions.overviewActions.SET_OVERVIEW
      // });

      //   dispatch(getAllProducts(response.data));
      return response.data;
    } catch (e) {
      throw e;
    }
  };
}

export function getAllProducts() {
  return async (dispatch: Dispatch<any>, getState: () => IAppplicationState) => {
    // @todo: Get Tenant ID from store rather than localstorage
    const URL = `/user`;
    try {
      const response = await axios.get(URL);
      console.log('response', response);
      // dispatch(getAllProducts(mediaData.data));
      // return mediaData.data;
    } catch (e) {
      console.error('Service::GetAllMedia', e);
      throw e;
    }
  };
}
