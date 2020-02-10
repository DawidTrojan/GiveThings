import React from "react";
import { Link } from "react-router-dom";

const Content = ({ auth }) => (
  <div className="content_container">
    <div className="content_title">
      <h1>Start helping!</h1>
      <h2>Give unwanted items to trusted hands</h2>
    </div>
    <div className="content_decoration--box">
      <div className="content_decoration" />
    </div>
    <div className="content_buttons">
      <Link
        to={auth.isEmpty ? "/signin" : "/give-things"}
        className="content_link--button"
      >
        Give Things
      </Link>
      <Link
        to={auth.isEmpty ? "/signin" : "/give-things"}
        className="content_link--button"
      >
        Organize a collection
      </Link>
    </div>
  </div>
);

export default Content;
