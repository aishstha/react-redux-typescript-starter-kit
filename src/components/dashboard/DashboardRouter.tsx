import React from 'react';
import { Switch, Route } from 'react-router';

import { HOME, DETAILS, REPORT, PROFILE } from '../../constants/routes';

import Overview from './overview';
import Detail from './detail';
import Report from './report';
import Profile from './profile';

const DashboardRouters: React.SFC<{}> = () => (
  <Switch>
    <Route exact path={DETAILS} component={Detail} />
    <Route exact path={REPORT} component={Report} />
    <Route exact path={PROFILE} component={Profile} />
    <Route path={HOME} component={Overview} />
  </Switch>
);

export default DashboardRouters;
