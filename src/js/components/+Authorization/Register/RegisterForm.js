import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const RegisterForm = ({ signUp, error }) => {
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
      errors.email = "Invalid email!";
    } else {
      errors.email = "";
    }

    if (register.password.length <= 5) {
      isValid = false;
      errors.password = "Password is too short!";
    } else {
      errors.password = "";
    }

    if (
      register.password !== register.password2 ||
      register.password2.length <= 5
    ) {
      isValid = false;
      errors.password2 = "The passwords must be the same!";
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
      <div className="auth_form--registerInputs">
        <div className="inputs_title--box">
          <span>Email</span>
        </div>
        <input value={register.email} onChange={handleOnChange} name="email" />
        <div className="error_box">
          <span className="auth_error">{errors.email}</span>
        </div>
        <div className="inputs_title--box">
          <span>Password</span>
        </div>
        <input
          value={register.password}
          onChange={handleOnChange}
          type="password"
          name="password"
        />
        <div className="error_box">
          <span className="auth_error">{errors.password}</span>
        </div>
        <div className="inputs_title--box">
          <span>Re-enter password</span>
        </div>
        <input
          value={register.password2}
          onChange={handleOnChange}
          type="password"
          name="password2"
        />
        <div className="error_box">
          {errors.password2 ? (
            <span className="auth_error">{errors.password2}</span>
          ) : null}
          {error && (!errors.password || !errors.email || !errors.password2) ? (
            <span className="auth_error">
              {error === "auth/email-already-in-use"
                ? "Account already exists!"
                : null}
            </span>
          ) : null}
        </div>
      </div>
      <div className="auth_form--buttons">
        <NavLink className="redirect_button" to="/signin">
          Sign in
        </NavLink>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default RegisterForm;
