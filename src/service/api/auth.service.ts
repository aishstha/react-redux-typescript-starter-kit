import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import axios from '../../utils/axios';
import { IAppplicationState } from '../../reducers';
import { loginSuccess, loginFailure } from '../../actions/auth.actions';
import { ILogin } from '../../components/interface/auth.interface';

export function login(data: ILogin) {
  console.log('>>>>>>>>>>>>>>>', data);
  return async (dispatch: Dispatch<any>, getState: () => IAppplicationState) => {
    const URL = `/user/token`;
    try {
      const response: AxiosResponse = await axios.post(URL, data, {
        headers: {
          Authorization:
            'eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1OTc0MmQyNjlhY2IzNWZiNjU3YzBjNGRkMmM3YjcyYWEzMTRiNTAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vam91cm5leWZvb2RzLWlvIiwiYXVkIjoiam91cm5leWZvb2RzLWlvIiwiYXV0aF90aW1lIjoxNTgwMjAyMjQ2LCJ1c2VyX2lkIjoiQjI3MjQySmloZ1JPcmhjTkRMR2puWWFTa3lRMiIsInN1YiI6IkIyNzI0MkppaGdST3JoY05ETEdqbllhU2t5UTIiLCJpYXQiOjE1ODAyMDIyNDYsImV4cCI6MTU4MDIwNTg0NiwiZW1haWwiOiJkZW1vQGpvdXJuZXlmb29kcy5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGVtb0Bqb3VybmV5Zm9vZHMuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.is3Saq6drh0EPrOswKIx46YkFUL23-kI5VXnmAsMcmJMRCTq0aYA6ONcKSZo8R0-uheAk1T84PQ18QYESFijOQQ8W1CwlUZ1ZK6m6t1HxFREpy4nvqeEHKkYCeTFzEyLL2OzdEuM8_aGfggcOgKqvkxR4Ok3DjhddMAVuETGeV84esvorYrv-BD3UjX1hTqT8-qWmWSRSjJyn70Bw1GRKj2gFFBt9xCez6Mea-sE9aNF4HJLDNmvJvivywNFQKR7EW7zTvAi8xM0qdADGkYwkybMPm_wK8Gvr_OI5A5nd2LTow-1Ew90v1LpGNvt_Mdx4bk16z_f0ptalW18gU695w'
        }
      });

      dispatch(loginSuccess(response.data));
    } catch (e) {
      loginFailure();
      throw e;
    }
  };
}
