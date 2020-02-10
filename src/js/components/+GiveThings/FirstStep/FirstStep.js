import React from "react";
import Bar from "./Bar";

const FirstStep = ({ nextButton, currStep, handleChange, error, type }) => {
  if (currStep !== 1) {
    return null;
  }

  return (
    <>
      <Bar />
      <div className="firstStep_form--container">
        <div className="firstStep_form--wrapper">
          <span>Step 1/4</span>
          <div className="firstStep_form">
            <label>Select what you want to give:</label>
            <div className="firstStep_form--inputBox">
              <input
                type="radio"
                name="radio"
                value="clothes that can be used again"
                onChange={handleChange}
                checked={type === "clothes that can be used again"}
              />
              <span>clothes that can be used again</span>
            </div>
            <div className="firstStep_form--inputBox">
              <input
                type="radio"
                name="radio"
                value="clothes to throw away"
                onChange={handleChange}
                checked={type === "clothes to throw away"}
              />
              <span>clothes to throw away</span>
            </div>
            <div className="firstStep_form--inputBox">
              <input
                type="radio"
                name="radio"
                value="toys"
                onChange={handleChange}
                checked={type === "toys"}
              />
              <span>toys</span>
            </div>
            <div className="firstStep_form--inputBox">
              <input
                type="radio"
                name="radio"
                value="books"
                onChange={handleChange}
                checked={type === "books"}
              />
              <span>books</span>
            </div>
            <div className="firstStep_form--inputBox">
              <input
                type="radio"
                name="radio"
                value="other"
                onChange={handleChange}
                checked={type === "other"}
              />{" "}
              <span>other</span>
            </div>
          </div>
          <div className="firstStep_buttons">
            {nextButton()}
            {error ? <p className="form_error">{error}</p> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstStep;
