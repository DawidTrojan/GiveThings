import React from "react";
import Title from "./Title";
import MessageForm from "../../../containers/MessageForm";
import Footer from "../../../containers/Footer";

const HomeFooter = () => (
  <>
    <div className="home_footer__container">
      <div className="wrapper">
        <div className="home_footer__box">
          <Title />
          <MessageForm />
        </div>
        <Footer />
      </div>
    </div>
  </>
);

export default HomeFooter;
