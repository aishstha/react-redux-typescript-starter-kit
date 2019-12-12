import React from 'react';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import AppRouter from './AppRouter';

interface IApp {
  history: History;
}

const App: React.FC<IApp> = ({ history }) => (
  <ConnectedRouter history={history}>
    <AppRouter />
  </ConnectedRouter>
);

export default App;
