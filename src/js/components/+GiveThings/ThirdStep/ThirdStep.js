import React from "react";
import Bar from "./Bar";

const ThirdStep = ({ currStep, prevButton, nextButton }) => {
  if (currStep !== 3) {
    return null;
  }

  return (
    <div>
      <Bar />
      <div className="thirdStep_form__container">
        <div className="thirdStep_form__wrapper">
          <span>Krok 3/4</span>
          <div className="thirdStep_form">
            <div className="localization_box">
              <span className="localization_title">Lokalizacja:</span>
              <select defaultValue="-1" name="" id="">
                <option value="-1" disabled>
                  -- wybierz --
                </option>
                <option value="">Poznań</option>
                <option value="">Warszawa</option>
                <option value="">Kraków</option>
                <option value="">Wrocław</option>
                <option value="">Katowice</option>
              </select>
            </div>
            <div className="thirdStep_form__checkbox">
              <span>Komu chcesz pomóc?</span>
              <div className="form_checkbox">
                <div className="form_checkbox__box">
                  <input type="checkbox" name="check_first" id="check_first" />
                  <label htmlFor="check_first">dzieciom</label>
                </div>
                <div className="form_checkbox__box">
                  <input
                    type="checkbox"
                    name="check_second"
                    id="check_second"
                  />
                  <label htmlFor="check_second">samotnym matkom</label>
                </div>
                <div className="form_checkbox__box">
                  <input type="checkbox" name="check_third" id="check_third" />
                  <label htmlFor="check_third">bezdomnym</label>
                </div>
                <div className="form_checkbox__box">
                  <input
                    type="checkbox"
                    name="check_fourth"
                    id="check_fourth"
                  />
                  <label htmlFor="check_fourth">niepełnosprawnym</label>
                </div>
                <div className="form_checkbox__box">
                  <input type="checkbox" name="check_fifth" id="check_fifth" />
                  <label htmlFor="check_fifth">osobom starszym</label>
                </div>
              </div>
            </div>
            <div className="form_textInput">
              <span className="textInput_title">
                Wpisz nazwę konkretnej organizacji (opcjonalnie)
              </span>
              <input type="text" />
            </div>
            <div className="thirdStep_form__buttons">
              {prevButton()}
              {nextButton()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
