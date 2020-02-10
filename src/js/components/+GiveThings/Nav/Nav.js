import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ profile }) => {
  return (
    <div className="giveThings_nav__box">
      <span className="user_greeting">Hello {profile.email}!</span>
      <Link className="giveThings_redirect" to="/">
        <span>Home</span>
      </Link>
      <Link className="giveThings_redirect" to="/collections">
        <span>My collections</span>
      </Link>
    </div>
  );
};

export default Nav;
