import React from "react";
import Nav from "../../containers/Nav";
import RegisterTitle from "./RegisterTitle";
import RegisterForm from "./RegisterForm";
import { Redirect } from "react-router-dom";

const Register = ({ auth, signUp, authError, authSuccess }) => {
  if (auth.uid) return <Redirect to="/" />;
  return (
    <div className="auth_container">
      <div className="wrapper">
        <div className="auth_nav">
          <Nav />
        </div>
        <RegisterTitle />
        <RegisterForm signUp={signUp} />
      </div>
    </div>
  );
};

export default Register;
