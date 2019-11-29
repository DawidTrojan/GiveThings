import React from "react";
import { Link } from "react-scroll";
import "../../../../node_modules/font-awesome/css/font-awesome.min.css";
import HomeHeader from "../../containers/HomeHeader";
import HomeThreeColumns from "./+HomeThreeColumns";
import HomeSteps from "../../containers/HomeSteps";
import HomeAboutUs from "./+HomeAboutUs";
import HomeHelpInfo from "./+HomeHelpInfo";
import HomeFooter from "./+HomeFooter";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="home">
      <HomeHeader />
      <HomeThreeColumns />
      <HomeSteps />
      <HomeAboutUs />
      <HomeHelpInfo />
      <HomeFooter />
      <Link
        className="scroll_top"
        to="home"
        duration={500}
        smooth={true}
      ></Link>
      <i onClick={scrollToTop} className="fa fa-angle-double-up" />
    </div>
  );
};

export default Home;
