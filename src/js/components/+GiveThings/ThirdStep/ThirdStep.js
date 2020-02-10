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
      <div className="thirdStep_form--container">
        <div className="thirdStep_form--wrapper">
          <span className="step_title">Step 3/4</span>
          <div className="thirdStep_form">
            <div className="localization_box">
              <span className="localization_title">Localization:</span>
              <select
                defaultValue={!localization ? "1" : localization}
                name="localization"
                id=""
                onChange={handleChange}
                style={
                  localizationError
                    ? {
                        borderColor: "#FF0000"
                      }
                    : null
                }
              >
                <option value="">-- select --</option>
                <option value="Berlin">Berlin</option>
                <option value="Hamburg">Hamburg</option>
                <option value="Leipzig">Leipzig</option>
                <option value="Frankfurt">Frankfurt</option>
                <option value="Hannover">Hannover</option>
              </select>
            </div>
            <div className="thirdStep_form--checkbox">
              <span>Who do you want to help?</span>
              <div className="form_checkbox">
                <div className="form_checkbox--box">
                  <input
                    type="checkbox"
                    name="check"
                    id="check_first"
                    value="children"
                    onChange={handleChange}
                    checked={groups.includes("children")}
                  />
                  <label htmlFor="check_first">children</label>
                </div>
                <div className="form_checkbox--box">
                  <input
                    type="checkbox"
                    name="check"
                    id="check_second"
                    value="single mothers"
                    onChange={handleChange}
                    checked={groups.includes("single mothers")}
                  />
                  <label htmlFor="check_second">single mothers</label>
                </div>
                <div className="form_checkbox--box">
                  <input
                    type="checkbox"
                    name="check"
                    id="check_third"
                    value="homeless"
                    onChange={handleChange}
                    checked={groups.includes("homeless")}
                  />
                  <label htmlFor="check_third">homeless</label>
                </div>
                <div className="form_checkbox--box">
                  <input
                    type="checkbox"
                    name="check"
                    id="check_fourth"
                    value="people with disabilities"
                    onChange={handleChange}
                    checked={groups.includes("people with disabilities")}
                  />
                  <label htmlFor="check_fourth">people with disabilities</label>
                </div>
                <div className="form_checkbox--box">
                  <input
                    type="checkbox"
                    name="check"
                    id="check_fifth"
                    value="old people"
                    onChange={handleChange}
                    checked={groups.includes("old people")}
                  />
                  <label htmlFor="check_fifth">old people</label>
                </div>
              </div>
            </div>
            <div className="form_textInput">
              <span className="textInput_title">
                Enter the name of a specific organization (optional)
              </span>
              <input
                style={
                  localizationError
                    ? {
                        borderColor: "#FF0000"
                      }
                    : null
                }
                type="text"
                name="organization"
                onChange={handleChange}
                value={organization}
              />
            </div>
          </div>
          <div className="buttons_box">
            <div className="thirdStep_form--buttons">
              {prevButton()}
              {!groups.length ? (
                <span> Mark who you want to help! </span>
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
