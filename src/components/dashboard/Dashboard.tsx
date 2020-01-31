import React from "react";
import { RouteComponentProps } from "react-router";

import Footer from "../common/footer";
import Header from "../common/header";
import Navbar from "../common/navbar";
import DashboardRouter from "./DashboardRouter";

const Dashboard: React.SFC<RouteComponentProps<{}>> = () => (
  <div className="flex-box">
    <Navbar />
    <div className="page-content">
      <Header />
      <DashboardRouter />
      <Footer />
    </div>
  </div>
);

export default Dashboard;
