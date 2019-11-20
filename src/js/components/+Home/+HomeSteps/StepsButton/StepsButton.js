import React from "react";
import { Link } from "react-router-dom";

const StepsButton = ({ auth }) => (
  <div className="steps_button">
    <Link
      to={auth.isEmpty ? "/logowanie" : "/oddaj-rzeczy"}
      className="steps_button__link"
    >
      <span>Oddaj rzeczy</span>
    </Link>
  </div>
);

export default StepsButton;
