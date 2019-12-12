import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

import { HOME } from '../constants/routes';

import Dashboard from './dashboard';
import AsyncRoute from './commons/AsyncRoute';

const AppRouter: React.SFC<{}> = () => (
  <Switch>
    {process.env.NODE_ENV === 'development' && (
      <Route
        path="/design"
        component={(props: RouteComponentProps<{}>) => (
          <AsyncRoute defaultProps={props} loadModulePromise={import(`../components/design`)} />
        )}
      />
    )}
    {/* <Route exact path={LOGIN} component={Login} /> */}
    <Route path={HOME} component={Dashboard} />
  </Switch>
);

export default AppRouter;
