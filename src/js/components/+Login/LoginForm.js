import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LoginForm = ({ signIn }) => {
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
      errors.email = "Podany email jest nieprawidłowy!";
    } else {
      errors.email = "";
    }

    if (sign.password.length <= 5) {
      isValid = false;
      errors.password = "Podane hasło jest za krótkie!";
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
    signIn(sign.email, sign.password);
    if (validate()) {
      setSign({
        ...sign,
        email: "",
        password: ""
      });
    } else {
      return errors;
    }
  };

  return (
    <form className="auth_form" onSubmit={handleOnSubmit}>
      <div className="auth_form__loginInputs">
        <span>Email</span>
        <input value={sign.email} onChange={handleOnChange} name="email" />
        <span className="auth_error">{errors.email}</span>
        <span>Hasło</span>
        <input
          type="password"
          name="password"
          value={sign.password}
          onChange={handleOnChange}
        />
        <span className="auth_error">{errors.password}</span>
      </div>
      <div className="auth_form__buttons">
        <NavLink className="redirect_button" to="/rejestracja">
          Załóż konto
        </NavLink>
        <button type="submit">Zaloguj</button>
      </div>
    </form>
  );
};

export default LoginForm;
