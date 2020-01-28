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
  const accessToken =
    'eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1OTc0MmQyNjlhY2IzNWZiNjU3YzBjNGRkMmM3YjcyYWEzMTRiNTAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vam91cm5leWZvb2RzLWlvIiwiYXVkIjoiam91cm5leWZvb2RzLWlvIiwiYXV0aF90aW1lIjoxNTgwMjEyNzY2LCJ1c2VyX2lkIjoiQjI3MjQySmloZ1JPcmhjTkRMR2puWWFTa3lRMiIsInN1YiI6IkIyNzI0MkppaGdST3JoY05ETEdqbllhU2t5UTIiLCJpYXQiOjE1ODAyMTI3NjYsImV4cCI6MTU4MDIxNjM2NiwiZW1haWwiOiJkZW1vQGpvdXJuZXlmb29kcy5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGVtb0Bqb3VybmV5Zm9vZHMuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.FRYOcRqetoOueAxXaQOPSHF54bnusqUHKmi-jcmhZrHcDqjY8uXfQyZ2K00HMoKoB-a9YY-E6N6_Rv6liCN0yFmXavmZvvF4Dj2X2SpvQ4t6-8_W2G17gn8-ANZPb5iSu_aPquP3f6U4wh86-035rWT3csVyuYotSbP9_9IhAwU9wPNhS0WnfhbxA-foDZPmzmmfbVKWjiAcQNf5vY7l10Cu3ijRP-bruEMESlo9bH6g28Wz9pO-LTzoSu3sm-FOqIhB7yvrAzrsmpw6VZ0ccJ10ZExKb4xGqbvhBgki8LBidSuf09AB_1t0ArK0nKNU-P-YIAT5ESmUl4ZB5nestQ';
  //  tokenService.getAccessToken();
  if (accessToken) {
    config.headers.Authorization = accessToken;
  }

  return config;
});

export default http;
