import axios from 'axios';
import * as tokenService from '../service/token.service';

import config from '../config';

const http = axios.create({
  baseURL: config.baseURI,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 0
});

// /**
//  * HTTP request interceptor.
//  */
// http.interceptors.request.use(config => {
//   let accessToken = tokenService.getAccessToken();
//   console.log('accessToken', accessToken);
//   config.headers.Authorization = accessToken;

//   return config;
// });

/**
 * HTTP request interceptor.
 */
http.interceptors.request.use(config => {
  const accessToken = tokenService.getAccessToken();
  if (accessToken) {
    config.headers.Authorization = accessToken;
  }

  return config;
});

export default http;
