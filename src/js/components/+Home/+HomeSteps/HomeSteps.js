import React from "react";
import StepsHeader from "./StepsHeader";
import StepsIcons from "./StepsIcons";
import StepsButton from "./StepsButton";

const HomeSteps = ({ auth }) => (
  <div className="steps_container">
    <StepsHeader />
    <StepsIcons />
    <StepsButton auth={auth} />
  </div>
);

export default HomeSteps;
