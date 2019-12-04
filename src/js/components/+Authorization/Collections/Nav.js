import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ email }) => {
  return (
    <div className="collections_nav__box">
      <span>Witaj {email}!</span>
      <Link className="collections_redirect" to="/">
        <span>Strona Główna</span>
      </Link>
    </div>
  );
};
export default Nav;
