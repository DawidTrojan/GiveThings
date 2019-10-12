import React from "react";
import { Link } from "react-router-dom";

const Content = () => (
  <div className="content_container">
    <div className="content_title">
      <span>Zacznij pomagać!</span>
      <span>Oddaj niechciane rzeczy w zaufane ręce</span>
    </div>
    <div className="content_decoration__box">
      <div className="content_decoration"></div>
    </div>
    <div className="content_buttons">
      <Link to="/logowanie" className="content_link__button">
        Oddaj rzeczy
      </Link>
      <Link to="/logowanie" className="content_link__button">
        Zorganizuj zbiórkę
      </Link>
    </div>
  </div>
);

export default Content;
