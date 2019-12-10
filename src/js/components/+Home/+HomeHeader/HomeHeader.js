import React from "react";
import Content from "./Content";
import Nav from "../../../containers/Nav";

const HomeHeader = ({ auth }) => {
  return (
    <header>
      <div className="wrapper">
        <div className="home_header--container">
          <Nav />
          <Content auth={auth} />
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
