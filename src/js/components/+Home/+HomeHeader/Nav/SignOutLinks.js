import React from "react";
import { Link } from "react-router-dom";

const SignOutLinks = () => {
  return (
    <>
      <Link to="/signin" className="nav_buttons--link">
        Sign In
      </Link>
      <Link to="/register" className="nav_buttons--link">
        Register
      </Link>
    </>
  );
};

export default SignOutLinks;
