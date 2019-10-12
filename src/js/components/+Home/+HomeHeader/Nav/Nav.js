import React from "react";
import { Link } from "react-router-dom";

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
    <div className="nav_links">
      <ul>
        <li>Start</li>
        <li>O co chodzi</li>
        <li>O nas</li>
        <li>Fundacja i organizacje</li>
        <li>Kontakt</li>
      </ul>
    </div>
  </div>
);

export default Nav;
