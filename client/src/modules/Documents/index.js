/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import DescriptionIcon from "@material-ui/icons/Description";

const Document = () => <div></div>;

export default {
  routeProps: {
    path: "/Document",
    component: Document,
  },

  name: "Documents",
  icon: <DescriptionIcon />,
};
