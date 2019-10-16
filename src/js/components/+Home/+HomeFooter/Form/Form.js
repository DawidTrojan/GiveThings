import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleNameOnChange = e => {
    setName(e.target.value);
  };

  const handleEmailOnChange = e => {
    setEmail(e.target.value);
  };

  const handleMessageOnChange = e => {
    setMessage(e.target.value);
  };

  const validate = () => {
    let isValid = true;

    if (!name || name.indexOf(" ") > 0) {
      isValid = false;
      errors.name = "Podane imię jest nieprawidłowe!";
    } else {
      errors.name = "";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      isValid = false;
      errors.email = "Podany email jest nieprawidłowy!";
    } else {
      errors.email = "";
    }

    if (message.length < 120) {
      isValid = false;
      errors.message = "Wiadomość musi mieć conajmniej 120 znaków!";
    } else {
      errors.message = "";
    }

    setErrors({
      ...errors
    });

    return isValid;
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    axios
      .post("https://fer-api.coderslab.pl/v1/portfolio/contact", {
        name,
        email,
        message
      })
      .then(result => console.log(result.data))
      .catch(err => console.log(err.response.data.errors));

    if (validate()) {
      setName("");
      setEmail("");
      setMessage("");
      setSuccess("Wiadomość została wysłana! Wkrótce się skontaktujemy.");
    } else {
      setSuccess("");
      return errors;
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className="home_footer__form">
      <span className="form_success">{success}</span>
      <div className="form_input__container">
        <div className="form_input__box">
          <h5>Wpisz swoje imię</h5>
          <input
            type="text"
            placeholder="Krzysztof"
            value={name}
            name="name"
            onChange={handleNameOnChange}
          />
          <span>{errors.name}</span>
        </div>
        <div className="form_input__box">
          <h5>Wpisz swój email</h5>
          <input
            placeholder="abc@xyz.pl"
            value={email}
            name="email"
            onChange={handleEmailOnChange}
          />
          <span>{errors.email}</span>
        </div>
      </div>
      <div className="form_textarea__box">
        <h5>Wpisz swoją wiadomość</h5>
        <textarea
          value={message}
          onChange={handleMessageOnChange}
          name="message"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <span>{errors.message}</span>
      </div>

      <div className="form_button__box">
        <button>Wyślij</button>
      </div>
    </form>
  );
};

export default Form;
