import React from "react";

import NavLinks from "./NavLinks";
import SignInLinks from "../../../../containers/SignInLinks";
import SignOutLinks from "./SignOutLinks";

const Nav = ({ auth, profile }) => {
  const links = auth.uid ? (
    <SignInLinks profile={profile}></SignInLinks>
  ) : (
    <SignOutLinks />
  );

  return (
    <div className="nav_container">
      <div className="nav_buttons">{links}</div>
      <NavLinks />
    </div>
  );
};

export default Nav;
