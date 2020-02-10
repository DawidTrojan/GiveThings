import React from "react";
import Loading from "../../../../assets/Loading";

const FormThanks = ({ isReady, isLoading }) => {
  return (
    <div className="formThanks_container">
      {isLoading && isReady ? (
        <Loading />
      ) : (
        <div className="formThanks_wrapper">
          <div className="formThanks_box">
            <span>
              Thank you for submitting the form. We will send any pickup
              information by email.
            </span>
            <div className="decoration"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormThanks;
