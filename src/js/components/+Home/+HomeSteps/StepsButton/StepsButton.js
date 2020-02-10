import React from "react";
import { Link } from "react-router-dom";

const StepsButton = ({ auth }) => (
  <div className="wrapper">
    <div className="steps_button">
      <Link
        to={auth.isEmpty ? "/signin" : "/give-things"}
        className="steps_button--link"
      >
        <span>Give Things</span>
      </Link>
    </div>
  </div>
);

export default StepsButton;
