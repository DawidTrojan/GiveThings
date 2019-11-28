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
          <div className="secondStep_form">
            <div className="select_box">
              <label>
                Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
              </label>
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
          </div>
          <div className="buttons_box">
            <div className="secondStep_form__buttons">
              {prevButton()}
              {nextButton()}
            </div>
            {error ? <p className="form_error">{error}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
