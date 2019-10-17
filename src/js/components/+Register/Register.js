import React from "react";
import Nav from "../+Home/+HomeHeader/Nav";
import RegisterTitle from "./RegisterTitle";
import RegisterForm from "./RegisterForm";

const Register = () => (
  <div className="auth_container">
    <div className="wrapper">
      <div className="auth_nav">
        <Nav />
      </div>
      <RegisterTitle />
      <RegisterForm />
    </div>
  </div>
);

export default Register;
