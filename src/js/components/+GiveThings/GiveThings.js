import React, { useState } from "react";
import Nav from "../../containers/Nav";
import GiveThingsTitle from "../+GiveThings/GiveThingsHeader/GiveThingsTitle";
import GiveThingsSteps from "../+GiveThings/GiveThingsHeader/GiveThingsSteps";
import HomeFooter from "../+Home/+HomeFooter";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";

const GiveThings = () => {
  const prevComponent = e => {
    e.preventDefault();
    const lastIndex = changeComponent.components.length - 1;
    const resetIndex = changeComponent.currentIndex === 0;
    const index = resetIndex ? lastIndex : changeComponent.currentIndex - 1;
    setChangeComponents({
      ...changeComponent,
      currentIndex: index
    });
  };

  const nextComponent = e => {
    e.preventDefault();
    const lastIndex = changeComponent.components.length - 1;
    const resetIndex = changeComponent.currentIndex === lastIndex;
    const index = resetIndex ? 0 : changeComponent.currentIndex + 1;
    setChangeComponents({
      ...changeComponent,
      currentIndex: index
    });
    console.log(changeComponent);
  };

  const [changeComponent, setChangeComponents] = useState({
    currentIndex: 0,
    components: [<FirstStep />, <SecondStep />, <ThirdStep />, <FourthStep />]
  });

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
      {changeComponent.components.map((component, i) => component)}
      <HomeFooter />
    </>
  );
};

export default GiveThings;
