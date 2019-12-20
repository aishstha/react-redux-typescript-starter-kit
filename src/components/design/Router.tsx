import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { designRoutes } from '../../constants/designroute';

const DesignRouter = () => (
  <Switch>
    {designRoutes.map(route => (
      <Route key={route.path} path={route.path} component={route.component} exact={true} />
    ))}
  </Switch>
);

export default DesignRouter;
