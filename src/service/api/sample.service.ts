import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import axios from '../../utils/axios';
import config from '../../config';

export function getAllProducts() {
  return async (dispatch: Dispatch): Promise<{}> => {
    try {
      const URL = `/api/users`;
      const response: AxiosResponse = await axios.get(URL);
      //   dispatch(getAllProducts(response.data));
      return response.data;
    } catch (e) {
      throw e;
    }
  };
}
