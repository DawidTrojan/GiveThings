import React from "react";
import Nav from "../../containers/Nav";
import GiveThingsTitle from "./GiveThingsTitle";
import GiveThingsSteps from "./GiveThingsSteps";

const Login = () => {
  return (
    <div className="giveThings_container">
      <div className="wrapper">
        <div className="giveThings_nav">
          <Nav />
        </div>
        <GiveThingsTitle />
        <GiveThingsSteps />
      </div>
    </div>
  );
};

export default Login;
