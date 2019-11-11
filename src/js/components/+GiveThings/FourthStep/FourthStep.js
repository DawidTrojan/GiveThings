import React, { useState } from "react";
import Bar from "./Bar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FourthStep = ({
  currStep,
  prevButton,
  nextButton,
  handleChange,
  handleDate,
  address,
  error
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
          <h3>Podaj adres oraz termin odbioru rzeczy przez kuriera</h3>
          <div className="fourthStep_form">
            <div className="form_container">
              <div className="form_box">
                <div className="form_box__item">
                  <span>Ulica</span>
                  <input
                    type="text"
                    name="address"
                    id="street"
                    onChange={handleChange}
                    value={address.street}
                  />
                </div>
                <div className="form_box__item">
                  <span>Miasto</span>
                  <input
                    type="text"
                    name="address"
                    id="city"
                    onChange={handleChange}
                    value={address.city}
                  />
                </div>
                <div className="form_box__item">
                  <span>Kod pocztowy</span>
                  <input
                    type="text"
                    name="address"
                    id="postCode"
                    onChange={handleChange}
                    value={address.postCode}
                  />
                </div>
                <div className="form_box__item">
                  <span>Numer telefonu</span>
                  <input
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
                  <span>Data</span>
                  <DatePicker selected={address.date} onChange={handleDate} />
                </div>
                <div className="form_box__item">
                  <span>Godzina</span>
                  <input
                    type="text"
                    name="address"
                    id="time"
                    onChange={handleChange}
                    value={address.time}
                  />
                </div>
                <div className="form_box__textarea">
                  <span>Uwagi dla kuriera</span>
                  <textarea
                    name="address"
                    id="comments"
                    onChange={handleChange}
                    value={address.comments}
                  />
                </div>
              </div>
            </div>
            <div className="fourthStep_form__buttons">
              {prevButton()}
              {nextButton()}
            </div>
            <p className="form_error">{error.street}</p>
            <p className="form_error">{error.city}</p>
            <p className="form_error">{error.postCode}</p>
            <p className="form_error">{error.phoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthStep;
