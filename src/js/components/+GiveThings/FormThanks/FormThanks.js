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
              Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie
              informacje o odbiorze.
            </span>
            <div className="decoration"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormThanks;
