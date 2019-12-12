import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Example from './Example';
import DesignMain from './Main';

const DesignRouter = () => (
  <Switch>
    <Route exact path="/design/example" component={Example} />
    <Route path="/design" component={DesignMain} />
  </Switch>
);

export default DesignRouter;
