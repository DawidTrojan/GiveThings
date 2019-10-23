import React, { useState } from "react";
import ArrowUp from "../../../../../assets/ArrowUp.png";
import ArrowDown from "../../../../../assets/ArrowDown.png";

const Form = ({ prev, next }) => {
  const styleSelected = {
    backgroundImage: `url(${ArrowUp})`,
    background: "transparent",
    backgroundRepeat: "no-repeat",
    backgroundSize: "57px 26px",
    backgroundPosition: "right center"
  };

  const styleSelect = {
    backgroundImage: `url(${ArrowDown})`,
    background: "transparent",
    backgroundRepeat: "no-repeat",
    backgroundSize: "57px 26px",
    backgroundPosition: "right center"
  };

  const [selected, setSelected] = useState({
    check: false
  });

  const handleOnClick = () => {
    setSelected(prevState => ({
      check: !prevState.check
    }));
  };
  return (
    <div className="thirdStep_form__container">
      <div className="thirdStep_form__wrapper">
        <span>Krok 3/4</span>
        <form className="thirdStep_form">
          <div className="localization_box">
            <span className="localization_title">Lokalizacja:</span>
            <select
              defaultValue="-1"
              name=""
              id=""
              style={selected.check ? styleSelected : styleSelect}
              onClick={handleOnClick}
            >
              <option value="-1" disabled>
                -- wybierz --
              </option>
              <option value="">Poznań</option>
              <option value="">Warszawa</option>
              <option value="">Kraków</option>
              <option value="">Wrocław</option>
              <option value="">Katowice</option>
            </select>
          </div>
          <div className="thirdStep_form__checkbox">
            <span>Komu chcesz pomóc?</span>
            <div className="form_checkbox">
              <div className="form_checkbox__box">
                <input type="checkbox" name="check_first" id="check_first" />
                <label htmlFor="check_first">dzieciom</label>
              </div>
              <div className="form_checkbox__box">
                <input type="checkbox" name="check_second" id="check_second" />
                <label htmlFor="check_second">samotnym matkom</label>
              </div>
              <div className="form_checkbox__box">
                <input type="checkbox" name="check_third" id="check_third" />
                <label htmlFor="check_third">bezdomnym</label>
              </div>
              <div className="form_checkbox__box">
                <input type="checkbox" name="check_fourth" id="check_fourth" />
                <label htmlFor="check_fourth">niepełnosprawnym</label>
              </div>
              <div className="form_checkbox__box">
                <input type="checkbox" name="check_fifth" id="check_fifth" />
                <label htmlFor="check_fifth">osobom starszym</label>
              </div>
            </div>
          </div>
          <div className="form_textInput">
            <span className="textInput_title">
              Wpisz nazwę konkretnej organizacji (opcjonalnie)
            </span>
            <input type="text" />
          </div>
          <div className="thirdStep_form__buttons">
            <button onClick={prev}>Wstecz</button>
            <button onClick={next}>Dalej</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
