import React from 'react';
import { RouteComponentProps } from 'react-router';

const Example: React.SFC<RouteComponentProps<{}>> = () => (
  <div className="default-wrapper">
    <div className="default-paragraph">
      <h1>Design Example Route</h1>
      <span>This is an example route on basis of which all child routes of design should be created</span>
    </div>
  </div>
);

export default Example;
