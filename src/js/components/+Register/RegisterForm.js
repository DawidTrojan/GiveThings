import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const RegisterForm = ({ signUp }) => {
  const [register, setRegister] = useState({
    email: "",
    password: "",
    password2: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    password2: ""
  });

  const handleOnChange = e => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let isValid = true;

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(register.email)) {
      isValid = false;
      errors.email = "Podany email jest nieprawidłowy!";
    } else {
      errors.email = "";
    }

    if (register.password.length <= 5) {
      isValid = false;
      errors.password = "Podane hasło jest za krótkie!";
    } else {
      errors.password = "";
    }

    if (
      register.password !== register.password2 ||
      register.password2.length <= 5
    ) {
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
      setRegister({
        ...register,
        email: "",
        password: "",
        password2: ""
      });
      signUp(register);
    } else {
      return errors;
    }
  };

  return (
    <form className="auth_form" onSubmit={handleOnSubmit}>
      <div className="auth_form__registerInputs">
        <span>Email</span>
        <input value={register.email} onChange={handleOnChange} name="email" />
        <span className="auth_error">{errors.email}</span>
        <span>Hasło</span>
        <input
          value={register.password}
          onChange={handleOnChange}
          type="password"
          name="password"
        />
        <span className="auth_error">{errors.password}</span>
        <span>Powtórz hasło</span>
        <input
          value={register.password2}
          onChange={handleOnChange}
          type="password"
          name="password2"
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
