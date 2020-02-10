import React, { useState } from "react";
import Fundations from "../Fundations";
import Organizations from "../Organizations";
import LocalCollections from "../LocalCollections";

const Header = () => {
  const [isActiveFundation, setIsActiveFundation] = useState(true);
  const [isActiveOrganization, setIsActiveOrganization] = useState(false);
  const [isActiveLocal, setIsActiveLocal] = useState(false);

  const handleOnClick = e => {
    if (e.target.id === "fundations") {
      setIsActiveOrganization(false);
      setIsActiveLocal(false);
      setIsActiveFundation(true);
    } else if (e.target.id === "organizations") {
      setIsActiveFundation(false);
      setIsActiveLocal(false);
      setIsActiveOrganization(true);
    } else if (e.target.id === "local") {
      setIsActiveFundation(false);
      setIsActiveLocal(true);
      setIsActiveOrganization(false);
    }
  };

  return (
    <div className="help_info--container">
      <div className="wrapper">
        <div className="help_info--header">
          <h4>Who do we help??</h4>
          <div className="help_info--decoration"></div>
          <div className="help_info--buttons">
            {isActiveFundation ? (
              <span id="fundations" className="active" onClick={handleOnClick}>
                Fundations
              </span>
            ) : (
              <span id="fundations" onClick={handleOnClick}>
                Fundations
              </span>
            )}
            {isActiveOrganization ? (
              <span
                id="organizations"
                className="active"
                onClick={handleOnClick}
              >
                Organizations
              </span>
            ) : (
              <span id="organizations" onClick={handleOnClick}>
                Organizations
              </span>
            )}
            {isActiveLocal ? (
              <span id="local" className="active" onClick={handleOnClick}>
                Local collections
              </span>
            ) : (
              <span id="local" onClick={handleOnClick}>
                Local collections
              </span>
            )}
          </div>
        </div>
        {isActiveFundation ? <Fundations /> : null}
        {isActiveOrganization ? <Organizations /> : null}
        {isActiveLocal ? <LocalCollections /> : null}
      </div>
    </div>
  );
};

export default Header;
