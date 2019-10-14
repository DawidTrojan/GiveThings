import React from "react";

const Form = () => (
  <form className="home_footer__form">
    <div className="form_input__container">
      <div className="form_input__box">
        <h5>Wpisz swoje imię</h5>
        <input type="text" placeholder="Krzysztof" />
      </div>
      <div className="form_input__box">
        <h5>Wpisz swój email</h5>
        <input type="email" placeholder="abc@xyz.pl" />
      </div>
    </div>
    <div className="form_textarea__box">
      <h5>Wpisz swoją wiadomość</h5>
      <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
    </div>
    <div className="form_button__box">
      <button>Wyślij</button>
    </div>
  </form>
);

export default Form;
