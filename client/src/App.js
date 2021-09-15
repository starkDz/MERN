import React, { Fragment } from "react";
import "./App.css";
// import NavBar from "./components/layout/NavBar";
import SignInSide from "./components/auth/SignInSide";
import SignIn from "./components/auth/SignIn";
const App = () => (
  <Fragment>
    <SignInSide />
    {/* <SignIn /> */}
  </Fragment>
);

export default App;
