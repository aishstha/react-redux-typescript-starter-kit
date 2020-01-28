import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

import { HOME, LOGIN } from '../constants/routes';

import Dashboard from './dashboard';
// import PrivateRoute from './common/PrivateRoute';
import Login from './login';

let Design: any;
if (process.env.NODE_ENV === 'development') {
  Design = React.lazy(() => import('../components/design'));
}

const AppRouter: React.SFC<{}> = () => (
  <Switch>
    <React.Suspense fallback={<span>Loading...</span>}>
      {Design && <Route path="/design" component={Design} />}

      <Route path={LOGIN} component={Login} />

      {/* <PrivateRoute path={HOME} component={Dashboard} /> */}

      <Route path={HOME} component={Dashboard} />
    </React.Suspense>
  </Switch>
);

export default AppRouter;
