import axios from 'axios';
// import * as tokenService from "../service/token.service";

import config from '../config';

const http = axios.create({
  baseURL: config.baseURI,
  headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  timeout: 0
});

// /**
//  * HTTP request interceptor.
//  */
// http.interceptors.request.use(config => {
// let accessToken = tokenService.getAccessToken();
//
//   config.headers.Authorization = accessToken;

//   return config;
// });

/**
 * HTTP request interceptor.
 */
// http.interceptors.request.use(config => {
//   const accessToken =
//     'eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1OTc0MmQyNjlhY2IzNWZiNjU3YzBjNGRkMmM3YjcyYWEzMTRiNTAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vam91cm5leWZvb2RzLWlvIiwiYXVkIjoiam91cm5leWZvb2RzLWlvIiwiYXV0aF90aW1lIjoxNTgwNDUwNzQ0LCJ1c2VyX2lkIjoiQjI3MjQySmloZ1JPcmhjTkRMR2puWWFTa3lRMiIsInN1YiI6IkIyNzI0MkppaGdST3JoY05ETEdqbllhU2t5UTIiLCJpYXQiOjE1ODA0NTA3NDQsImV4cCI6MTU4MDQ1NDM0NCwiZW1haWwiOiJkZW1vQGpvdXJuZXlmb29kcy5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGVtb0Bqb3VybmV5Zm9vZHMuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.E3_tzj1cT4pBmUXRmQvHgjiTWI_VTavnMJ2HGxHaU68zV_PWrFj314zWKpiTMfPr276v-otLQBV-ZqPKnaSG7He8ZxCP93wORxOWPQh3Bdnru_6vCjs7KxWuNuANKf2MlXapE3JtDtDZbYmH8EAkCDtq7YazKrGwdNUJOqbNSHnyb6pF23Ag2RBj88oQo-x3xlvaNw0FaC4TdaYISau4cd62-HghqqIgQUb2gcgDN2CkHLWBpZYXfISmrct95FoVisoPR4XqNisAGkP3O-KEnPQc58PmukgLs55dVL6ncT0xlnN2gUgayJ8GlC6fnqpopJzOh72ybfG1HQgKaIoQzQ';
//   //  tokenService.getAccessToken();
//   if (accessToken) {
//     config.headers.Authorization = accessToken;
//   }

//   return config;
// });

export default http;
