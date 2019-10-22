import React from "react";

const Form = () => {
  return (
    <div className="firstStep_form__container">
      <div className="firstStep_form__wrapper">
        <span>Krok 1/4</span>
        <form className="firstStep_form">
          <label>Zaznacz co chcesz dodać:</label>
          <div className="firstStep_form__inputBox">
            <input type="radio" name="radio" />
            <span>ubrania, które nadają się do ponownego użycia</span>
          </div>
          <div className="firstStep_form__inputBox">
            <input type="radio" name="radio" />
            <span>ubrania, do wyrzucenia</span>
          </div>
          <div className="firstStep_form__inputBox">
            <input type="radio" name="radio" />
            <span>zabawki</span>
          </div>
          <div className="firstStep_form__inputBox">
            <input type="radio" name="radio" />
            <span>książki</span>
          </div>
          <div className="firstStep_form__inputBox">
            <input type="radio" name="radio" />
            <span>Inne</span>
          </div>
          <button>Dalej</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
