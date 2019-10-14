import React from "react";
import HomeHeader from "./+HomeHeader";
import HomeThreeColumns from "./+HomeThreeColumns";
import HomeSteps from "./+HomeSteps";
import HomeAboutUs from "./+HomeAboutUs";

const Home = () => (
  <div className="layout_container">
    <HomeHeader />
    <HomeThreeColumns />
    <HomeSteps />
    <HomeAboutUs />
  </div>
);

export default Home;
