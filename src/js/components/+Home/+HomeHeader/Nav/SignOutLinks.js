import React from "react";
import { Link } from "react-router-dom";

const SignOutLinks = () => {
  return (
    <>
      <Link to="/logowanie" className="nav_buttons--link">
        Zaloguj
      </Link>
      <Link to="/rejestracja" className="nav_buttons--link">
        Załóż konto
      </Link>
    </>
  );
};

export default SignOutLinks;
