import React from "react";
import Content from "./Content";
import Nav from "../../../containers/Nav";

const HomeHeader = () => (
  <header>
    <div className="wrapper">
      <div className="home_header__container">
        <Nav />
        <Content />
      </div>
    </div>
  </header>
);

export default HomeHeader;
