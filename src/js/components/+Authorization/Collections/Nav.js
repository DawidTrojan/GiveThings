import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ email }) => {
  return (
    <div className="collections_nav__box">
      <span className="user_greeting">Hello {email}!</span>
      <Link className="collections_redirect" to="/">
        <span>Home</span>
      </Link>
    </div>
  );
};
export default Nav;
