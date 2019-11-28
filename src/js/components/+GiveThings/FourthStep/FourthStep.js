import React from "react";
import Bar from "./Bar";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import TimeField from "react-simple-timefield";

const FourthStep = ({
  currStep,
  prevButton,
  nextButton,
  handleChange,
  handleDate,
  handleTime,
  currentDate,
  currentTime,
  address,
  error,
  dateError
}) => {
  if (currStep !== 4) {
    return null;
  }

  return (
    <div>
      <Bar />
      <div className="fourthStep_form__container">
        <div className="fourthStep_form__wrapper">
          <span>Krok 4/4</span>
          <div className="fourthStep_form">
            <h3>Podaj adres oraz termin odbioru rzeczy</h3>
            <div className="form_container">
              <div className="form_box">
                <div className="form_box__item">
                  <div className="item_title">
                    <span>Ulica</span>
                  </div>
                  <input
                    style={
                      error.street
                        ? {
                            borderColor: "red"
                          }
                        : null
                    }
                    type="text"
                    name="address"
                    id="street"
                    onChange={handleChange}
                    value={address.street}
                  />
                </div>
                <div className="form_box__item">
                  <div className="item_title">
                    <span>Miasto</span>
                  </div>
                  <input
                    style={
                      error.city
                        ? {
                            borderColor: "red"
                          }
                        : null
                    }
                    type="text"
                    name="address"
                    id="city"
                    onChange={handleChange}
                    value={address.city}
                  />
                </div>
                <div className="form_box__item">
                  <div className="item_title">
                    <span>Kod pocztowy</span>
                  </div>
                  <input
                    style={
                      error.postCode
                        ? {
                            borderColor: "red"
                          }
                        : null
                    }
                    type="text"
                    name="address"
                    id="postCode"
                    onChange={handleChange}
                    value={address.postCode}
                  />
                </div>
                <div className="form_box__item">
                  <div className="item_title">
                    <span>Numer telefonu</span>
                  </div>
                  <input
                    style={
                      error.phoneNumber
                        ? {
                            borderColor: "red"
                          }
                        : null
                    }
                    type="text"
                    name="address"
                    id="phoneNumber"
                    onChange={handleChange}
                    value={address.phoneNumber}
                  />
                </div>
              </div>
              <div className="form_box">
                <div className="form_box__item" name="date">
                  <div className="item_title">
                    <span>Data</span>
                  </div>
                  <div
                    className="fourthStep_input"
                    style={
                      dateError
                        ? {
                            borderColor: "red"
                          }
                        : null
                    }
                  >
                    <DatePicker
                      selected={currentDate}
                      onChange={handleDate}
                      dateFormat="dd/MM/yyyy"
                      showSecond={false}
                    />
                  </div>
                </div>
                <div className="form_box__item">
                  <div className="item_title">
                    <span>Godzina</span>
                  </div>
                  <TimeField
                    value={currentTime.toString()}
                    onChange={handleTime}
                    colon=":"
                    input={
                      <input type="text" className="time_input" name="time" />
                    }
                  />
                </div>
                <div className="form_box__textarea">
                  <div className="item_title">
                    <span>Uwagi dla kuriera</span>
                  </div>
                  <textarea
                    name="address"
                    id="comments"
                    onChange={handleChange}
                    value={address.comments}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="buttons_box">
            <div className="fourthStep_form__buttons">
              {prevButton()}
              {nextButton()}
            </div>
            <div className="form_errors">
              {error.street ? (
                <p className="form_error"> {error.street}</p>
              ) : null}
              {error.city ? <p className="form_error"> {error.city}</p> : null}
              {error.postCode ? (
                <p className="form_error"> {error.postCode}</p>
              ) : null}
              {error.phoneNumber ? (
                <p className="form_error"> {error.phoneNumber}</p>
              ) : null}
              {dateError ? <p className="form_error"> {dateError}</p> : null}
              {error.time ? <p className="form_error"> {error.time}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthStep;
