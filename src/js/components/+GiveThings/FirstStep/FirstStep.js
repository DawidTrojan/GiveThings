import React from "react";
import Bar from "./Bar";

const FirstStep = ({ nextButton, currStep, handleChange, error, type }) => {
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
            <label>Zaznacz co chcesz oddać:</label>
            <div className="firstStep_form__inputBox">
              <input
                type="radio"
                name="radio"
                value="ubrania, które nadają się do ponownego użycia"
                onChange={handleChange}
                checked={
                  type === "ubrania, które nadają się do ponownego użycia"
                }
                style={error ? { background: "red" } : null}
              />
              <span>ubrania, które nadają się do ponownego użycia</span>
            </div>
            <div className="firstStep_form__inputBox">
              <input
                type="radio"
                name="radio"
                value="ubrania, do wyrzucenia"
                onChange={handleChange}
                checked={type === "ubrania, do wyrzucenia"}
                style={error ? { background: "red" } : null}
              />
              <span>ubrania, do wyrzucenia</span>
            </div>
            <div className="firstStep_form__inputBox">
              <input
                type="radio"
                name="radio"
                value="zabawki"
                onChange={handleChange}
                checked={type === "zabawki"}
                style={error ? { background: "red" } : null}
              />
              <span>zabawki</span>
            </div>
            <div className="firstStep_form__inputBox">
              <input
                type="radio"
                name="radio"
                value="książki"
                onChange={handleChange}
                checked={type === "książki"}
                style={error ? { background: "red" } : null}
              />
              <span>książki</span>
            </div>
            <div className="firstStep_form__inputBox">
              <input
                type="radio"
                name="radio"
                value="Inne"
                onChange={handleChange}
                checked={type === "Inne"}
                style={error ? { background: "red" } : null}
              />
              <span>Inne</span>
            </div>
            {nextButton()}
            <p className="form_error">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
