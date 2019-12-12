import React from 'react';
import { RouteComponentProps } from 'react-router';

import Footer from '../common/footer';
import Header from '../common/header';

import DashboardRouter from './DashboardRouter';

const Dashboard: React.SFC<RouteComponentProps<{}>> = () => (
  <div>
    <Header />
    <DashboardRouter />
    <Footer />
  </div>
);

export default Dashboard;
