import React from "react";

const StepsIcons = () => (
  <div className="steps_icons__container">
    <div className="wrapper">
      <div className="steps_icons__box">
        <div className="step_icons__icon first" />
        <h5>Wybierz rzeczy</h5>
        <span>ubrania, zabawki, sprzęt i inne</span>
      </div>
      <div className="steps_icons__box">
        <div className="step_icons__icon second" />
        <h5>Spakuj je</h5>
        <span>skorzystaj z worków na śmieci</span>
      </div>
      <div className="steps_icons__box">
        <div className="step_icons__icon third" />
        <h5>Zdecyduj komu chcesz pomóc</h5>
        <span>wybierz zaufane miejsce</span>
      </div>
      <div className="steps_icons__box">
        <div className="step_icons__icon fourth" />
        <h5>Zamów kuriera</h5>
        <span>kurier przyjedzie w dogodnym terminie</span>
      </div>
    </div>
  </div>
);

export default StepsIcons;
