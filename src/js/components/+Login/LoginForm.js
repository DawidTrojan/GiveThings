import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handleEmailOnChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordOnChange = e => {
    setPassword(e.target.value);
  };

  const validate = () => {
    let isValid = true;

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      isValid = false;
      errors.email = "Podany email jest nieprawidłowy!";
    } else {
      errors.email = "";
    }

    if (password.length <= 5) {
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

    if (validate()) {
      setEmail("");
      setPassword("");
    } else {
      return errors;
    }
  };

  return (
    <form className="auth_form" onSubmit={handleOnSubmit}>
      <div className="auth_form__loginInputs">
        <span>Email</span>
        <input value={email} onChange={handleEmailOnChange} />
        <span className="auth_error">{errors.email}</span>
        <span>Hasło</span>
        <input
          type="password"
          value={password}
          onChange={handlePasswordOnChange}
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
