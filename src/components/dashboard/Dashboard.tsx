import React from 'react';
import { RouteComponentProps } from 'react-router';

// import Footer from 'components/common/footer';
// import Header from 'components/common/header';

import DashboardRouter from './DashboardRouter';

const Dashboard: React.SFC<RouteComponentProps<{}>> = () => (
  <div>
    {/* <Header /> */}
    <DashboardRouter />
    {/* <Footer /> */}
  </div>
);

export default Dashboard;
