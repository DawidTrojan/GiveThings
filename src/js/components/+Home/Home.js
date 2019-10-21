import React from "react";
import HomeHeader from "../../containers/HomeHeader";
import HomeThreeColumns from "./+HomeThreeColumns";
import HomeSteps from "../../containers/HomeSteps";
import HomeAboutUs from "./+HomeAboutUs";
import HomeHelpInfo from "./+HomeHelpInfo";
import HomeFooter from "./+HomeFooter";

const Home = () => (
  <>
    <HomeHeader />
    <HomeThreeColumns />
    <HomeSteps />
    <HomeAboutUs />
    <HomeHelpInfo />
    <HomeFooter />
  </>
);

export default Home;
