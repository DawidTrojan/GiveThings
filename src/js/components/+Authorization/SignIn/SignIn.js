import React from "react";
import SignInTitle from "./SignInTitle";
import SignInForm from "./SignInForm";
import NavButton from "../NavButton";
import { Redirect } from "react-router-dom";
import Loading from "../../../../assets/Loading";

const SignIn = ({ auth, signIn, error, isLoading }) => {
  if (auth.uid) return <Redirect to="/" />;
  if (isLoading) return <Loading />;
  return (
    <div className="auth_container">
      <div className="wrapper">
        <NavButton />
        <SignInTitle />
        <SignInForm signIn={signIn} error={error} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default SignIn;
