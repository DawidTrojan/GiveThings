import React from "react";
import Title from "./Title";
import Form from "./Form";
import Footer from "./Footer";

const HomeFooter = () => (
  <>
    <div className="home_footer__container">
      <div className="wrapper">
        <div className="home_footer__box">
          <Title />
          <Form />
        </div>
        <Footer />
      </div>
    </div>
  </>
);

export default HomeFooter;
