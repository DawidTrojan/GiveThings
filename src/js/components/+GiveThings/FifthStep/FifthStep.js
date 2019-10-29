import React from "react";

const FourthStep = ({ currStep, prevButton, submitButton }) => {
  if (currStep !== 5) {
    return null;
  }

  return (
    <div>
      <div className="fifthStep_form__container">
        <div className="fifthStep_form__wrapper">
          <h3>Podsumowanie Twojej darowizny</h3>
          <div className="fifthStep_info__box">
            <span className="fifthStep_info__description">Oddajesz:</span>
            <div className="fifthStep_info__item">
              <div className="fiftStep_icon" />
              <div className="fifthStep_info__text">
                <span>4 worki, ubrania w dobrym stanie, dzieciom</span>
              </div>
            </div>
            <div className="fifthStep_info__item">
              <div className="fiftStep_icon__second" />
              <div className="fifthStep_info__text">
                <span>dla lokalizacji: Warszawa</span>
              </div>
            </div>
            <div></div>
          </div>
          <div className="fifthStep_form">
            <div className="fifth_form__container">
              <div className="fifth_form__box">
                <h4>Adres odbioru:</h4>
                <div className="form_item">
                  <span>Ulica</span>
                  <span>Ulica</span>
                </div>
                <div className="form_item">
                  <span>Miasto</span>
                  <span>Dębica</span>
                </div>
                <div className="form_item">
                  <span>Kod pocztowy</span>
                  <span>39-200</span>
                </div>
                <div className="form_item">
                  <span>Numer telefonu</span>
                  <span>777777777</span>
                </div>
              </div>
              <div className="fifth_form__box">
                <h4>Termin odbioru:</h4>
                <div className="form_item">
                  <span>Data</span>
                  <span>14.01.2020</span>
                </div>
                <div className="form_item">
                  <span>Godzina</span>
                  <span>17:37</span>
                </div>
                <div className="form_item">
                  <span>Uwagi dla kuriera</span>
                  <span>cdsad</span>
                </div>
              </div>
            </div>
            <div className="fifthStep_form__buttons">
              {prevButton()}
              {submitButton()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthStep;
