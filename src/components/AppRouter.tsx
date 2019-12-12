import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HOME } from '../constants/routes';

import Dashboard from './dashboard';

import { designRoutes } from '../constants/designroute';

const AppRouter: React.SFC<{}> = () => (
  <Switch>
    {process.env.NODE_ENV === 'development' &&
      designRoutes.map(route => <Route key={route.path} path={route.path} component={route.component} exact={true} />)}

    <Route path={HOME} component={Dashboard} />
  </Switch>
);

export default AppRouter;
