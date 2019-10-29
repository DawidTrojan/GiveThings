import React from "react";
import Bar from "./Bar";

const SecondStep = ({ currStep, prevButton, nextButton }) => {
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
                defaultValue="-1"
                name="secondStep-select"
                id="secondStep_select"
              >
                <option value="-1" disabled>
                  -- wybierz --
                </option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
              </select>
            </div>
            <div className="secondStep_form__buttons">
              {prevButton()}
              {nextButton()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
