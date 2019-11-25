import React from "react";
import { Link } from "react-scroll";
import HomeHeader from "../../containers/HomeHeader";
import HomeThreeColumns from "./+HomeThreeColumns";
import HomeSteps from "../../containers/HomeSteps";
import HomeAboutUs from "./+HomeAboutUs";
import HomeHelpInfo from "./+HomeHelpInfo";
import HomeFooter from "./+HomeFooter";

const Home = () => (
  <div className="home">
    <HomeHeader />
    <HomeThreeColumns />
    <HomeSteps />
    <HomeAboutUs />
    <HomeHelpInfo />
    <HomeFooter />
    <Link className="scroll_top" to="home" duration={500} smooth={true}>
      ^
    </Link>
  </div>
);

export default Home;
