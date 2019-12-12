// import * as dotenv from 'dotenv';

// dotenv.config();

const api = '/api';

let baseURI = 'http://localhost:3045';

if (process.env.NODE_ENV === 'production') {
  baseURI = ''; //TODO: Keep production url
}

export default {
  baseURI: baseURI,
  app: {
    baseHref: '/',
    title: 'Nexxt portal'
  },
  api: {
    endpoints: {
      login: api + '/auth',
      product: api + '/projects/all'
    }
  }
};
