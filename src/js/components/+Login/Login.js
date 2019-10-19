import React from "react";
import Nav from "../../containers/Nav";
import LoginTitle from "./LoginTitle";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";

const Login = ({ auth, signIn, authError, authSuccess }) => {
  if (auth.uid) return <Redirect to="/" />;
  return (
    <div className="auth_container">
      <div className="wrapper">
        <div className="auth_nav">
          <Nav />
        </div>
        <LoginTitle />
        <LoginForm signIn={signIn} />
      </div>
    </div>
  );
};

export default Login;
