import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Example from './Example';
import DesignMain from './Main';
import { designRoutes } from '../../constants/designroute';

const DesignRouter = () => (
  <Switch>
    {designRoutes.map(route => (
      <Route key={route.path} path={route.path} component={route.component} exact={true} />
    ))}
  </Switch>
);

export default DesignRouter;
