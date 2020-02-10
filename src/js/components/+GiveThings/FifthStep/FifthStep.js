import React from "react";
import Moment from "react-moment";

const FifthStep = ({ currStep, prevButton, submitButton, form, isValid }) => {
  if (currStep !== 5) {
    return null;
  }

  return (
    <div>
      <div className="fifthStep_summary--container">
        <div className="fifthStep_summary--wrapper">
          <h3>Summary of your donation</h3>
          <div className="fifthStep_info--box">
            <span className="fifthStep_info--description">You give:</span>
            <div className="fifthStep_info--item">
              <div className="fiftStep_icon" />
              <div className="fifthStep_info--text">
                {!form.type ? null : (
                  <span>
                    {" "}
                    {form.type}
                    {", "}
                  </span>
                )}
                {!form.bags ? null : (
                  <span>
                    {" "}
                    {form.bags}
                    {", "}
                  </span>
                )}
                <span> {form.helpGroups.map(el => el).join(", ")}</span>
              </div>
            </div>
            <div className="fifthStep_info--item">
              <div className="fiftStep_icon--second" />
              <div className="fifthStep_info--text">
                <span>
                  for location:{" "}
                  {!form.localization
                    ? form.specificLocalization
                    : form.localization}
                </span>
              </div>
            </div>
            <div></div>
          </div>
          <div className="fifthStep_summary">
            <div className="fifth_summary--container">
              <div className="fifth_summary--box">
                <h4>Pickup address:</h4>
                <div className="summary_item">
                  <span>Street</span> <span> {form.address.street}</span>
                </div>
                <div className="summary_item">
                  <span>City</span> <span> {form.address.city}</span>
                </div>
                <div className="summary_item">
                  <span>Post code</span>
                  <span> {form.address.postCode}</span>
                </div>
                <div className="summary_item">
                  <span>Phone number</span>
                  <span> {form.address.phoneNumber}</span>
                </div>
              </div>
              <div className="fifth_summary--box">
                <h4>Date of receipt:</h4>
                <div className="summary_item">
                  <span>Date</span>
                  <span>
                    <Moment format="DD/MM/YYYY">{form.date}</Moment>
                  </span>
                </div>
                <div className="summary_item">
                  <span>Time</span> <span> {form.time}</span>
                </div>
                <div className="summary_item">
                  <span>Details</span>
                  <span
                    style={
                      form.address.comments.length > 15
                        ? {
                            textOverflow: "ellipsis",
                            overflow: "hidden"
                          }
                        : null
                    }
                  >
                    {form.address.comments}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons_box">
            <div className="fifthStep_summary--buttons">
              {prevButton()}
              {submitButton()}
            </div>
            {!isValid ? (
              <p className="form_error">The form contains errors !</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthStep;
