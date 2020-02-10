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
      <div className="fourthStep_form--container">
        <div className="fourthStep_form--wrapper">
          <span>Step 4/4</span>
          <div className="fourthStep_form">
            <h3>Enter the address and date of receipt</h3>
            <div className="form_container">
              <div className="form_box">
                <div className="form_box--item">
                  <div className="item_title">
                    <span>Street</span>
                  </div>
                  <input
                    style={
                      error.street
                        ? {
                            borderColor: "#FF0000"
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
                <div className="form_box--item">
                  <div className="item_title">
                    <span>City</span>
                  </div>
                  <input
                    style={
                      error.city
                        ? {
                            borderColor: "#FF0000"
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
                <div className="form_box--item">
                  <div className="item_title">
                    <span>Post code</span>
                  </div>
                  <input
                    style={
                      error.postCode
                        ? {
                            borderColor: "#FF0000"
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
                <div className="form_box--item">
                  <div className="item_title">
                    <span>Phone number</span>
                  </div>
                  <input
                    style={
                      error.phoneNumber
                        ? {
                            borderColor: "#FF0000"
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
                <div className="form_box--item" name="date">
                  <div className="item_title">
                    <span>Date</span>
                  </div>
                  <div
                    className="fourthStep_input"
                    style={
                      dateError
                        ? {
                            borderColor: "#FF0000"
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
                <div className="form_box--item">
                  <div className="item_title">
                    <span>Time</span>
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
                <div className="form_box--textarea">
                  <div className="item_title">
                    <span>Details</span>
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
            <div className="fourthStep_form--buttons">
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
