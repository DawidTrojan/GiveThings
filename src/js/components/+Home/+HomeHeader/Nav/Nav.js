import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Nav = () => (
  <div className="nav_container">
    <div className="nav_buttons">
      <Link to="/logowanie" className="nav_buttons__link">
        Zaloguj
      </Link>
      <Link to="/rejestracja" className="nav_buttons__link">
        Załóż konto
      </Link>
    </div>
    <NavLinks />
  </div>
);

export default Nav;
