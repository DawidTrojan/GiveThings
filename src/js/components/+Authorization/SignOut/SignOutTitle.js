import React from "react";
import { NavLink } from "react-router-dom";

const SignOutTitle = () => (
  <div className="auth_title signOut">
    <h3>Wylogowanie nastąpiło pomyślnie!</h3>
    <div className="auth_title__decoration"></div>
    <NavLink className="redirect_button logout" to="/">
      <span>Strona główna</span>
    </NavLink>
  </div>
);

export default SignOutTitle;
