import React from "react";
import { Switch, Route } from "react-router";

import {
  HOME,
  DETAILS,
  REPORT,
  PROFILE,
  ADMIN,
  ADD_PRODUCT
} from "../../constants/routes";

import Overview from "./overview";
import Detail from "./detail";
import Report from "./report";
import Profile from "./profile";
import Admin from "./admin";
import NewProduct from "./product/NewProduct";

const DashboardRouters: React.SFC<{}> = () => (
  <Switch>
    <Route exact path={DETAILS} component={Detail} />
    <Route exact path={REPORT} component={Report} />
    <Route exact path={PROFILE} component={Profile} />
    <Route exact path={ADMIN} component={Admin} />
    <Route exact path={ADD_PRODUCT} component={NewProduct} />
    <Route path={HOME} component={Overview} />
  </Switch>
);

export default DashboardRouters;
