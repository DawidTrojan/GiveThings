import React from "react";
import LogoutTitle from "./LogoutTitle";
import Nav from "../../containers/Nav";

const Logout = () => (
  <div className="auth_container">
    <div className="wrapper">
      <div className="auth_nav">
        <Nav />
      </div>
      <LogoutTitle />
    </div>
  </div>
);

export default Logout;
