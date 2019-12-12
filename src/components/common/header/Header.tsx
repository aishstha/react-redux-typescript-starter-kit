import * as React from 'react';
import { connect } from 'react-redux';

import HeaderView from './HeaderView';

interface IDashboardProps {}

interface IDashboardState {}

class Dashboard extends React.Component<IDashboardProps, IDashboardState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  //Keep functions

  render() {
    return <HeaderView />;
  }
}

const mapStateToProps = (store: any) => {
  const {
    router: { location }
  } = store;
  return {
    location
  };
};

export default connect(mapStateToProps)(Dashboard);
