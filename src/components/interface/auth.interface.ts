export interface IUser {
  name: string;
  // role: string;
}

export interface IAuthentication {
  // user: IUser;
  requestingUser: boolean;
  isLoggedIn: boolean;
  role: string;
}

export interface ILogin {
  username: string;
  password: string;
}
