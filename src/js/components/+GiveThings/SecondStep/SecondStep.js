import React from "react";
import Bar from "./Bar";

const SecondStep = ({
  currStep,
  prevButton,
  nextButton,
  handleChange,
  bags,
  error
}) => {
  if (currStep !== 2) {
    return null;
  }

  return (
    <div>
      <Bar />
      <div className="secondStep_form__container">
        <div className="secondStep_form__wrapper">
          <span>Krok 2/4</span>
          <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
          <div className="secondStep_form">
            <div className="select_box">
              <span>Liczba 60l worków:</span>
              <select
                defaultValue={!bags ? "-1" : bags}
                id="secondStep_select"
                name="bag"
                onChange={handleChange}
                style={error ? { borderColor: "red" } : null}
              >
                <option value="-1" disabled>
                  -- wybierz --
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="secondStep_form__buttons">
              {prevButton()}
              {nextButton()}
              <p className="form_error">{error}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
