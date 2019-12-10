import React from "react";

const StepsIcons = () => (
  <div className="steps_icons--container">
    <div className="wrapper">
      <div className="steps_icons--box">
        <div className="step_icons--icon first" />
        <h5>Wybierz rzeczy</h5>
        <span>ubrania, zabawki, sprzęt i inne</span>
      </div>
      <div className="steps_icons--box">
        <div className="step_icons--icon second" />
        <h5>Spakuj je</h5>
        <span>skorzystaj z worków na śmieci</span>
      </div>
      <div className="steps_icons--box">
        <div className="step_icons--icon third" />
        <h5>Zdecyduj komu chcesz pomóc</h5>
        <span>wybierz zaufane miejsce</span>
      </div>
      <div className="steps_icons--box">
        <div className="step_icons--icon fourth" />
        <h5>Zamów kuriera</h5>
        <span>kurier przyjedzie w dogodnym terminie</span>
      </div>
    </div>
  </div>
);

export default StepsIcons;
