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
                value="ubrania które nadają się do ponownego użycia"
                onChange={handleChange}
                checked={
                  type === "ubrania które nadają się do ponownego użycia"
                }
              />
              <span
                style={
                  error
                    ? {
                        color: "red"
                      }
                    : null
                }
              >
                ubrania, które nadają się do ponownego użycia
              </span>
            </div>
            <div className="firstStep_form__inputBox">
              <input
                type="radio"
                name="radio"
                value="ubrania do wyrzucenia"
                onChange={handleChange}
                checked={type === "ubrania do wyrzucenia"}
              />
              <span
                style={
                  error
                    ? {
                        color: "red"
                      }
                    : null
                }
              >
                ubrania, do wyrzucenia
              </span>
            </div>
            <div className="firstStep_form__inputBox">
              <input
                type="radio"
                name="radio"
                value="zabawki"
                onChange={handleChange}
                checked={type === "zabawki"}
              />
              <span
                style={
                  error
                    ? {
                        color: "red"
                      }
                    : null
                }
              >
                zabawki
              </span>
            </div>
            <div className="firstStep_form__inputBox">
              <input
                type="radio"
                name="radio"
                value="książki"
                onChange={handleChange}
                checked={type === "książki"}
              />
              <span
                style={
                  error
                    ? {
                        color: "red"
                      }
                    : null
                }
              >
                książki
              </span>
            </div>
            <div className="firstStep_form__inputBox">
              <input
                type="radio"
                name="radio"
                value="Inne"
                onChange={handleChange}
                checked={type === "Inne"}
              />{" "}
              <span
                style={
                  error
                    ? {
                        color: "red"
                      }
                    : null
                }
              >
                Inne
              </span>
            </div>
          </div>
          <div className="firstStep_buttons">
            {nextButton()}
            {error ? <p className="form_error">{error}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
