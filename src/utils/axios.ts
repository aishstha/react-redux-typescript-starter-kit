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
    'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ3NjM1YWI2NDZlMDdmZDE5OWY3NGIwMTZhOTU0MzkyMmEwY2ZmOWEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vam91cm5leWZvb2RzLWlvIiwiYXVkIjoiam91cm5leWZvb2RzLWlvIiwiYXV0aF90aW1lIjoxNTc2ODM5MTAzLCJ1c2VyX2lkIjoiQjI3MjQySmloZ1JPcmhjTkRMR2puWWFTa3lRMiIsInN1YiI6IkIyNzI0MkppaGdST3JoY05ETEdqbllhU2t5UTIiLCJpYXQiOjE1NzY4MzkxMDMsImV4cCI6MTU3Njg0MjcwMywiZW1haWwiOiJkZW1vQGpvdXJuZXlmb29kcy5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGVtb0Bqb3VybmV5Zm9vZHMuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.DD35RdW1stK2pKDoD1fWaBRpGoliZWfjFAcKEVFzuEjkmmWV-2ZPzhO1kSBcqQF_lmCU32CmILgNqwOdjbeHwr-dY8jr8flkMX5DtZrxfh6F4en9Dl4ox1j2IxpBU3EprS544_8r-cs6PGSBsPCEq9dYeMaYplUBY2EFgDmRZPIV6f7fhoFTuoiWzFB9xZwDZAu_6MiWDfju7s1hy9ijZegQihvchoxzmIPEAw0ahWLAYiDl-nbrOwji8urllbxZY_723tQbNBw9KWv__4s3-ElmGBOuaLCzx_hOfXgHFYmLS5NkiavzfpjUf8RAeO_rSytpS-cx1PFZwhVIkI0WQw';
  config.headers.Authorization = accessToken;

  return config;
});

export default http;
