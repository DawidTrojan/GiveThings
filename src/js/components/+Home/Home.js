import React from "react";
import { Link } from "react-scroll";
import "../../../../node_modules/font-awesome/css/font-awesome.min.css";
import HomeHeader from "../../containers/HomeHeader";
import HomeThreeColumns from "./+HomeThreeColumns";
import HomeSteps from "../../containers/HomeSteps";
import HomeAboutUs from "./+HomeAboutUs";
import HomeHelpInfo from "./+HomeHelpInfo";
import HomeFooter from "./+HomeFooter";

const Home = ({ things, auth }) => {
  const currentElements = !things
    ? null
    : things
        .map(el => (el.authorId === auth.uid ? el : null))
        .filter(item => item !== null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="home">
      <HomeHeader />
      <HomeThreeColumns currentElements={currentElements} auth={auth} />
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
