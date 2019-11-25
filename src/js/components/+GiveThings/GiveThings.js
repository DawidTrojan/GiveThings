import React from "react";
import GiveThingsTitle from "../+GiveThings/GiveThingsHeader/GiveThingsTitle";
import GiveThingsSteps from "../+GiveThings/GiveThingsHeader/GiveThingsSteps";
import HomeFooter from "../+Home/+HomeFooter";
import Form from "../../containers/Form";
import Nav from "../../containers/GiveThingsNav";

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
      <Form />
      <HomeFooter />
    </>
  );
};

export default GiveThings;
