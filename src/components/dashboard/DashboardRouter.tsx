import React from 'react';
import { Switch, Route } from 'react-router';

import { HOME, DETAILS, REPORT } from '../../constants/routes';

import Main from './product';
import Detail from './detail';
import Report from './report';

const DashboardRouters: React.SFC<{}> = () => (
  <Switch>
    <Route exact path={DETAILS} component={Detail} />
    <Route exact path={REPORT} component={Report} />
    <Route path={HOME} component={Main} />
  </Switch>
);

export default DashboardRouters;
