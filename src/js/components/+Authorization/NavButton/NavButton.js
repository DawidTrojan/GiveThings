import React from "react";
import { Link } from "react-router-dom";

const NavButton = () => (
  <div className="auth_nav">
    <Link className="auth_button" to="/">
      <span>Strona Główna</span>
    </Link>
  </div>
);

export default NavButton;
