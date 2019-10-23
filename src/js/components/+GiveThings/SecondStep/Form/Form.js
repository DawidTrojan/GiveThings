import React, { useState } from "react";
import ArrowUp from "../../../../../assets/ArrowUp.png";
import ArrowDown from "../../../../../assets/ArrowDown.png";

const Form = ({ prev, next }) => {
  const styleSelected = {
    backgroundImage: `url(${ArrowUp})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "57px 26px",
    backgroundPosition: "right center"
  };

  const styleSelect = {
    backgroundImage: `url(${ArrowDown})`,
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
    <div className="secondStep_form__container">
      <div className="secondStep_form__wrapper">
        <span>Krok 2/4</span>
        <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
        <form className="secondStep_form">
          <div className="select_box">
            <span>Liczba 60l worków:</span>
            <select
              defaultValue="-1"
              name="secondStep-select"
              id="secondStep_select"
              onClick={handleOnClick}
              style={selected.check ? styleSelected : styleSelect}
            >
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
            <button onClick={prev}>Wstecz</button>
            <button onClick={next}>Dalej</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
