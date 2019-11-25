import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ profile }) => {
  return (
    <div className="giveThings_nav__box">
      <span>Witaj {profile.email}!</span>
      <Link className="giveThings_redirect" to="/">
        <span>Strona Główna</span>
      </Link>
    </div>
  );
};

export default Nav;
