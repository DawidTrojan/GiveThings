import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const SignInLinks = ({ signOut, profile }) => {
  const [logout, setLogout] = useState(false);

  if (logout) {
    return <Redirect to="/wylogowano"></Redirect>;
  }

  const handleOnClick = () => {
    setLogout(true);
    signOut();
  };

  return (
    <>
      <div className="user_greeting">
        <span>Cześć {profile.email}!</span>
      </div>
      <Link to="/oddaj-rzeczy" className="giveThings_button">
        Oddaj rzeczy
      </Link>
      <span className="nav_buttons__link logoutButton" onClick={handleOnClick}>
        Wyloguj
      </span>
    </>
  );
};

export default SignInLinks;
