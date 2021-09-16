import React, { Fragment } from "react";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";

const Catalogue = () => <Fragment>Catalogue</Fragment>;
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  routeProps: {
    path: "/Catalogue",
    component: Catalogue,
  },
  name: "Catalogue",
  icon: <LaptopMacIcon />,
};
