import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const SignInLinks = ({ signOut, profile }) => {
  const [logout, setLogout] = useState(false);

  if (logout) {
    return <Redirect to="/signout" />;
  }

  const handleOnClick = () => {
    setLogout(true);
    signOut();
  };

  return (
    <>
      <div className="user_greeting">
        <span>Hello {profile.email}!</span>
      </div>
      <Link to="/give-things" className="giveThings_button">
        Give things back
      </Link>
      <Link to="/collections" className="giveThings_button">
        Your collections
      </Link>
      <span className="nav_buttons--link logoutButton" onClick={handleOnClick}>
        Sign out
      </span>
    </>
  );
};

export default SignInLinks;
