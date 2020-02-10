import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LoginForm = ({ signIn, error }) => {
  const [sign, setSign] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handleOnChange = e => {
    setSign({
      ...sign,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let isValid = true;

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(sign.email)) {
      isValid = false;
      errors.email = "Invalid email";
    } else {
      errors.email = "";
    }

    if (sign.password.length <= 5) {
      isValid = false;
      errors.password = "Password is too short!";
    } else {
      errors.password = "";
    }

    setErrors({
      ...errors
    });

    return isValid;
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    if (validate()) {
      setSign({
        ...sign,
        email: "",
        password: ""
      });
      signIn(sign.email, sign.password);
    } else {
      return errors;
    }
  };

  return (
    <form className="auth_form" onSubmit={handleOnSubmit}>
      <div className="auth_form--signinInputs">
        <div className="inputs_title--box">
          <span>Email</span>
        </div>
        <input value={sign.email} onChange={handleOnChange} name="email" />
        <div className="error_box">
          <span className="auth_error">{errors.email}</span>
        </div>
        <div className="inputs_title--box">
          <span>Password</span>
        </div>
        <input
          type="password"
          name="password"
          value={sign.password}
          onChange={handleOnChange}
        />
        <div className="error_box">
          {errors.password ? (
            <span className="auth_error">{errors.password}</span>
          ) : null}
          {error && (!errors.password || !errors.email) ? (
            <span className="auth_error">
              {error === "auth/wrong-password" ? "Invalid password" : null}
              {error === "auth/user-not-found" ? "User not found!" : null}
            </span>
          ) : null}
        </div>
      </div>
      <div className="auth_form--buttons">
        <NavLink className="redirect_button" to="/register">
          Register
        </NavLink>
        <button type="submit">Sign In</button>
      </div>
    </form>
  );
};

export default LoginForm;
