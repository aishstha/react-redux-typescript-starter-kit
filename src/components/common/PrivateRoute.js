import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { tokenService } from 'msdf-core-ui';

import * as routes from 'constants/routes';

class PrivateRoute extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: !!tokenService.getAccessToken()
    };
  }

  render() {
    let { isLoggedIn } = this.state;

    return isLoggedIn ? <Route {...this.props} /> : <Redirect to={routes.LOGIN} />;
  }
}

export default PrivateRoute;
