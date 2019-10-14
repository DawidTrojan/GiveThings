import React from "react";
import HomeHeader from "./+HomeHeader";
import HomeThreeColumns from "./+HomeThreeColumns";
import HomeSteps from "./+HomeSteps";
import HomeAboutUs from "./+HomeAboutUs";
import HomeHelpInfo from "./+HomeHelpInfo";
import HomeFooter from "./+HomeFooter";

const Home = () => (
  <div className="layout_container">
    <HomeHeader />
    <HomeThreeColumns />
    <HomeSteps />
    <HomeAboutUs />
    <HomeHelpInfo />
    <HomeFooter />
  </div>
);

export default Home;
