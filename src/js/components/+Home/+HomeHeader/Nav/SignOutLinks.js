import React from "react";
import { Link } from "react-router-dom";

const SignOutLinks = () => {
  return (
    <>
      <Link to="/logowanie" className="nav_buttons__link">
        Zaloguj
      </Link>
      <Link to="/rejestracja" className="nav_buttons__link">
        Załóż konto
      </Link>
    </>
  );
};

export default SignOutLinks;
