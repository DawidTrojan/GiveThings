import React from "react";
import Nav from "../+Home/+HomeHeader/Nav";
import LoginTitle from "./LoginTitle";
import LoginForm from "./LoginForm";

const Login = () => (
  <div className="auth_container">
    <div className="wrapper">
      <div className="auth_nav">
        <Nav />
      </div>
      <LoginTitle />
      <LoginForm />
    </div>
  </div>
);

export default Login;
