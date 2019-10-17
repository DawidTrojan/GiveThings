import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    password2: ""
  });

  const handleEmailOnChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordOnChange = e => {
    setPassword(e.target.value);
  };

  const handlePassword2OnChange = e => {
    setPassword2(e.target.value);
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

    if (password !== password2 || password2.length <= 5) {
      isValid = false;
      errors.password2 = "Podane hasła muszą być takie same!";
    } else {
      errors.password2 = "";
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
      setPassword2("");
    } else {
      return errors;
    }
  };

  return (
    <form className="auth_form" onSubmit={handleOnSubmit}>
      <div className="auth_form__registerInputs">
        <span>Email</span>
        <input value={email} onChange={handleEmailOnChange} />
        <span className="auth_error">{errors.email}</span>
        <span>Hasło</span>
        <input
          value={password}
          onChange={handlePasswordOnChange}
          type="password"
        />
        <span className="auth_error">{errors.password}</span>
        <span>Powtórz hasło</span>
        <input
          value={password2}
          onChange={handlePassword2OnChange}
          type="password"
        />
        <span className="auth_error">{errors.password2}</span>
      </div>
      <div className="auth_form__buttons">
        <NavLink className="redirect_button" to="/logowanie">
          <span>Zaloguj się</span>
        </NavLink>
        <button type="submit">Załóż konto</button>
      </div>
    </form>
  );
};

export default RegisterForm;
