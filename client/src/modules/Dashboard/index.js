import React, { Fragment } from "react";
import HomeIcon from "@material-ui/icons/Home";

const Dashboard = () => <Fragment>Dashboard</Fragment>;
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  routeProps: {
    path: "/Dashboard",
    component: Dashboard,
  },
  name: "Dashboard",
  icon: <HomeIcon />,
};
