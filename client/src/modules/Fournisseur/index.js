/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
const Fournisseur = () => <div>Fournisseurs</div>;

export default {
  routeProps: {
    path: "/Fournisseur",
    component: Fournisseur,
  },
  name: "Fournisseurs",
  icon: <AddShoppingCartOutlinedIcon />,
};
