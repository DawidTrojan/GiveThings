import React from "react";
import { Link } from "react-router-dom";

const StepsButton = () => (
  <div className="steps_button">
    <div className="wrapper">
      <Link to="/logowanie" className="steps_button__link">
        Oddaj rzeczy
      </Link>
    </div>
  </div>
);

export default StepsButton;
