import React from "react";
import { NavLink } from "react-router-dom";

const SignOutTitle = () => (
  <div className="auth_title signOut">
    <h3>Logging out was successful!</h3>
    <div className="auth_title--decoration"></div>
    <NavLink className="redirect_button logout" to="/">
      <span>Home</span>
    </NavLink>
  </div>
);

export default SignOutTitle;
