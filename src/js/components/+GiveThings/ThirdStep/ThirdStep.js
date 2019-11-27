import React from "react";
import Bar from "./Bar";

const ThirdStep = ({
  currStep,
  prevButton,
  nextButton,
  handleChange,
  groups,
  organization,
  localization,
  localizationError
}) => {
  if (currStep !== 3) {
    return null;
  }

  return (
    <div>
      <Bar />
      <div className="thirdStep_form__container">
        <div className="thirdStep_form__wrapper">
          <span className="step_title">Krok 3/4</span>
          <div className="thirdStep_form">
            <div className="localization_box">
              <span className="localization_title">Lokalizacja:</span>
              <select
                defaultValue={!localization ? "1" : localization}
                name="localization"
                id=""
                onChange={handleChange}
                style={
                  localizationError
                    ? {
                        borderColor: "red"
                      }
                    : null
                }
              >
                <option value="">-- wybierz --</option>
                <option value="Poznań">Poznań</option>
                <option value="Warszawa">Warszawa</option>
                <option value="Kraków">Kraków</option>
                <option value="Wrocław">Wrocław</option>
                <option value="Katowice">Katowice</option>
              </select>
            </div>
            <div className="thirdStep_form__checkbox">
              <span>Komu chcesz pomóc?</span>
              <div className="form_checkbox">
                <div className="form_checkbox__box">
                  <input
                    type="checkbox"
                    name="check"
                    id="check_first"
                    value="dzieciom"
                    onChange={handleChange}
                    checked={groups.includes("dzieciom")}
                  />
                  <label htmlFor="check_first">dzieciom</label>
                </div>
                <div className="form_checkbox__box">
                  <input
                    type="checkbox"
                    name="check"
                    id="check_second"
                    value="samotnym matkom"
                    onChange={handleChange}
                    checked={groups.includes("samotnym matkom")}
                  />
                  <label htmlFor="check_second">samotnym matkom</label>
                </div>
                <div className="form_checkbox__box">
                  <input
                    type="checkbox"
                    name="check"
                    id="check_third"
                    value="bezdomnym"
                    onChange={handleChange}
                    checked={groups.includes("bezdomnym")}
                  />
                  <label htmlFor="check_third">bezdomnym</label>
                </div>
                <div className="form_checkbox__box">
                  <input
                    type="checkbox"
                    name="check"
                    id="check_fourth"
                    value="niepełnosprawnym"
                    onChange={handleChange}
                    checked={groups.includes("niepełnosprawnym")}
                  />
                  <label htmlFor="check_fourth">niepełnosprawnym</label>
                </div>
                <div className="form_checkbox__box">
                  <input
                    type="checkbox"
                    name="check"
                    id="check_fifth"
                    value="osobom starszym"
                    onChange={handleChange}
                    checked={groups.includes("osobom starszym")}
                  />
                  <label htmlFor="check_fifth">osobom starszym</label>
                </div>
              </div>
            </div>
            <div className="form_textInput">
              <span className="textInput_title">
                Wpisz nazwę konkretnej organizacji (opcjonalnie)
              </span>
              <input
                style={
                  localizationError
                    ? {
                        borderColor: "red"
                      }
                    : null
                }
                type="text"
                name="organization"
                onChange={handleChange}
                value={organization}
              />
            </div>
            <div className="thirdStep_form__buttons">
              {prevButton()}
              {!groups.length ? (
                <span> Wybierz komu chcesz pomóc ! </span>
              ) : (
                nextButton()
              )}
            </div>
            {localizationError ? (
              <p className="form_error"> {localizationError}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
