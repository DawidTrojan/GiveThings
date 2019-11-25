import React from "react";
import SignInTitle from "./SignInTitle";
import SignInForm from "./SignInForm";
import NavButton from "../NavButton";
import { Redirect } from "react-router-dom";

const SignIn = ({ auth, signIn }) => {
  if (auth.uid) return <Redirect to="/" />;
  return (
    <div className="auth_container">
      <div className="wrapper">
        <NavButton />
        <SignInTitle />
        <SignInForm signIn={signIn} />
      </div>
    </div>
  );
};

export default SignIn;
