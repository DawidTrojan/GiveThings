import React from "react";

const Form = () => {
  return (
    <div className="secondStep_form__container">
      <div className="secondStep_form__wrapper">
        <span>Krok 2/4</span>
        <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
        <form className="secondStep_form">
          <div className="select_box">
            <span>Liczba 60l worków:</span>
            <select defaultValue="-1" name="" id="">
              <option value="-1" disabled>
                -- wybierz --
              </option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
            </select>
          </div>
          <div className="secondStep_form__buttons">
            <button>Wstecz</button>
            <button>Dalej</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
