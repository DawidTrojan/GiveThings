import React from "react";
import Nav from "../../containers/Nav";
import GiveThingsTitle from "../+GiveThings/GiveThingsHeader/GiveThingsTitle";
import GiveThingsSteps from "../+GiveThings/GiveThingsHeader/GiveThingsSteps";
import HomeFooter from "../+Home/+HomeFooter";
// import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";

const GiveThings = () => {
  return (
    <>
      <div className="giveThings_container">
        <div className="wrapper">
          <div className="giveThings_nav">
            <Nav />
          </div>
          <GiveThingsTitle />
          <GiveThingsSteps />
        </div>
      </div>
      <SecondStep />
      <HomeFooter />
    </>
  );
};

export default GiveThings;
