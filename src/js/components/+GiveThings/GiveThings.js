import React from "react";
import { Redirect } from "react-router-dom";
import GiveThingsTitle from "../+GiveThings/GiveThingsHeader/GiveThingsTitle";
import GiveThingsSteps from "../+GiveThings/GiveThingsHeader/GiveThingsSteps";
import HomeFooter from "../+Home/+HomeFooter";
import Form from "../../containers/Form";
import Nav from "../../containers/GiveThingsNav";

const GiveThings = ({ auth }) => {
  if (!auth.uid) return <Redirect to="/" />;

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
