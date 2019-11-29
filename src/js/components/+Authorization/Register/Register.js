import React from "react";
import RegisterTitle from "./RegisterTitle";
import RegisterForm from "./RegisterForm";
import NavButton from "../NavButton";
import { Redirect } from "react-router-dom";

const Register = ({ auth, signUp, error, isLoading }) => {
  if (auth.uid) return <Redirect to="/" />;
  return (
    <div className="auth_container">
      <div className="wrapper">
        <NavButton />
        <RegisterTitle />
        <RegisterForm signUp={signUp} error={error} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Register;
