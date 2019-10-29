import React from "react";
import Bar from "./Bar";

const FirstStep = ({ nextButton, currStep }) => {
  if (currStep !== 1) {
    return null;
  }
  return (
    <div>
      <Bar />
      <div className="firstStep_form__container">
        <div className="firstStep_form__wrapper">
          <span>Krok 1/4</span>
          <div className="firstStep_form">
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
            {nextButton()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
