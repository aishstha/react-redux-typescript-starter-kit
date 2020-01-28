import { Actions } from '../constants/actions';

import * as tokenService from '../service/token.service';
import { IUser, IAuthentication } from '../components/interface/auth.interface';

interface IToken {
  accessToken: string;
  refreshToken: string;
}

function setTokenOnLocalStorage(token: IToken) {
  tokenService.setAccessToken(token.accessToken);
  tokenService.setRefreshToken(token.refreshToken);
}

function setRoleOnLocalStorage(role: string) {
  tokenService.setRole(role);
}

let { userDetails } = getUserDetailsFromLocalStorage();

export const initialState: IAuthentication = {
  requestingUser: false,
  isLoggedIn: false,
  role: ''
};

export const initialUserDetail: IUser = {
  name: ''
};

function getUserDetailsFromLocalStorage(): { userDetails: IUser } {
  userDetails = tokenService.getUserDetails() || initialUserDetail;

  return { userDetails };
}

export default function(state: IAuthentication = initialState, action: any): IAuthentication {
  switch (action.type) {
    case Actions.authActions.LOGIN_REQUEST:
      return { ...state };
    // return { ...state, requestingUser: true };

    case Actions.authActions.LOGIN_SUCCESS:
      console.log('im in success');
      return {
        ...state,
        isLoggedIn: true,
        role: action.payload
        // user: action.payload
      };

    case Actions.authActions.LOGIN_FAILURE:
      console.log('im in failuer');

      return {
        ...state,
        isLoggedIn: false
      };

    // case Actions.authActions.GET_USER:
    //   const user = tokenService.getUserDetails();
    //   return {
    //     ...state,
    //     user: user
    //   };

    case Actions.authActions.SET_TOKEN:
      setTokenOnLocalStorage(action.payload);
      return {
        ...state
      };

    case Actions.authActions.SET_ROLE:
      setRoleOnLocalStorage(action.payload);
      return {
        ...state
      };

    // case Actions.authActions.GET_TOKEN:
    //   const token = tokenService.get;
    //   setTokenOnLocalStorage(action.payload);
    //   return {
    //     ...state
    //   };

    case Actions.authActions.CLEAR_STATE:
      // @Todo: reset userDetails from localstorage
      return {
        // user: { ...initialUserDetail },
        requestingUser: false,
        isLoggedIn: false,
        role: ''
      };

    default:
      return state;
  }
}
