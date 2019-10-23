import React from "react";

const Form = ({ prev, next }) => {
  return (
    <div className="fourthStep_form__container">
      <div className="fourthStep_form__wrapper">
        <span>Krok 4/4</span>
        <h3>Podaj adres oraz termin odbioru rzeczy przez kuriera</h3>
        <form className="fourthStep_form">
          <div className="form_container">
            <div className="form_box">
              <div className="form_box__item">
                <span>Ulica</span>
                <input type="text" />
              </div>
              <div className="form_box__item">
                <span>Miasto</span>
                <input type="text" />
              </div>
              <div className="form_box__item">
                <span>Kod pocztowy</span>
                <input type="text" />
              </div>
              <div className="form_box__item">
                <span>Numer telefonu</span>
                <input type="text" />
              </div>
            </div>
            <div className="form_box">
              <div className="form_box__item">
                <span>Data</span>
                <input type="text" />
              </div>
              <div className="form_box__item">
                <span>Godzina</span>
                <input type="text" />
              </div>
              <div className="form_box__textarea">
                <span>Uwagi dla kuriera</span>
                <textarea />
              </div>
            </div>
          </div>

          <div className="fourthStep_form__buttons">
            <button onClick={prev}>Wstecz</button>
            <button onClick={next}>Dalej</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
