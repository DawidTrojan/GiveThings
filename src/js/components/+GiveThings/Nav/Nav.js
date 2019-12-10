import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ profile }) => {
  return (
    <div className="giveThings_nav__box">
      <span className="user_greeting">Witaj {profile.email}!</span>
      <Link className="giveThings_redirect" to="/">
        <span>Strona Główna</span>
      </Link>
      <Link className="giveThings_redirect" to="/zbiórki">
        <span>Twoje zbiórki</span>
      </Link>
    </div>
  );
};

export default Nav;
