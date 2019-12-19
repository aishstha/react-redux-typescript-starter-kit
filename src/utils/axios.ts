import axios from 'axios';

import config from '../config';

const http = axios.create({
  baseURL: config.baseURI,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 0
});

/**
 * HTTP request interceptor.
 */
http.interceptors.request.use(config => {
  let accessToken =
    'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ3NjM1YWI2NDZlMDdmZDE5OWY3NGIwMTZhOTU0MzkyMmEwY2ZmOWEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vam91cm5leWZvb2RzLWlvIiwiYXVkIjoiam91cm5leWZvb2RzLWlvIiwiYXV0aF90aW1lIjoxNTc2NzU5NDc4LCJ1c2VyX2lkIjoiQjI3MjQySmloZ1JPcmhjTkRMR2puWWFTa3lRMiIsInN1YiI6IkIyNzI0MkppaGdST3JoY05ETEdqbllhU2t5UTIiLCJpYXQiOjE1NzY3NTk0NzgsImV4cCI6MTU3Njc2MzA3OCwiZW1haWwiOiJkZW1vQGpvdXJuZXlmb29kcy5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGVtb0Bqb3VybmV5Zm9vZHMuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.RAXfgzYY0cIffhwz9sgk9sa40CsvaeRQWWhFGXe9XhgKRLwXPxVhHRFcuE3uzykTQ0T54AjQh_dNF2qRoVKUbD9yLtU840GSVMGcgR0tdaiw4h9ejqzDaSMdiUCcwiXEqaN0rSqYINUtYbX2FCIGoomU7ld9tHW107V2ANltrYA3EBN1DYPyExv__07wyyAZO78lYKZ-aeUN1SjFzTSDnhPZCLcWP0oungsyfUMBJkVFd0aleRGwXTKDCjfEIgG7c6Pt86-Xn_1Aroc0AhIFgvG9cKZ1jG4XT36ZVb8UKgktCn_zJsDXw4HX7At8JP8N5e03f5RAF4NjpEJAlE44lw';

  config.headers.Authorization = accessToken;

  return config;
});

export default http;
