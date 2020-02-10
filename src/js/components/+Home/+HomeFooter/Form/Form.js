import React, { useState } from "react";

const Form = ({ contact }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleOnChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let isValid = true;

    if (!form.name || form.name.indexOf(" ") > 0) {
      isValid = false;
      errors.name = "Invalid name!";
    } else {
      errors.name = "";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
      isValid = false;
      errors.email = "Invalid email!";
    } else {
      errors.email = "";
    }

    if (form.message.length < 120) {
      isValid = false;
      errors.message = "The message must be at least 120 characters!";
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

    if (validate()) {
      setForm({
        ...form,
        name: "",
        email: "",
        message: ""
      });
      contact(form);
      setSuccess("Message was sent! We will contact you soon.");
    } else {
      setSuccess("");
      return errors;
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className="home_footer--form">
      <span className="form_success">{success}</span>
      <div className="form_input--container">
        <div className="form_input--box">
          <h5>Enter your name</h5>
          <input
            type="text"
            placeholder="Brian"
            value={form.name}
            name="name"
            onChange={handleOnChange}
          />
          <span>{errors.name}</span>
        </div>
        <div className="form_input--box">
          <h5>Enter your email</h5>
          <input
            placeholder="abc@xyz.com"
            value={form.email}
            name="email"
            onChange={handleOnChange}
          />
          <span>{errors.email}</span>
        </div>
      </div>
      <div className="form_textarea--box">
        <h5>Enter your message</h5>
        <textarea
          value={form.message}
          onChange={handleOnChange}
          name="message"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <span>{errors.message}</span>
      </div>

      <div className="form_button--box">
        <button>Send</button>
      </div>
    </form>
  );
};

export default Form;
