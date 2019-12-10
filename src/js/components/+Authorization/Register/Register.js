import React from "react";
import RegisterTitle from "./RegisterTitle";
import RegisterForm from "./RegisterForm";
import NavButton from "../NavButton";
import Loading from "../../../../assets/Loading";
import { Redirect } from "react-router-dom";

const Register = ({ auth, signUp, error, isLoading }) => {
  if (auth.uid) return <Redirect to="/" />;
  if (isLoading) return <Loading />;
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
