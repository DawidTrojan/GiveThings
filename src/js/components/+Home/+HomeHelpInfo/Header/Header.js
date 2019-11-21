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
    <div className="help_info__container">
      <div className="help_info__header">
        <h4>Komu pomagamy?</h4>
        <div className="help_info__decoration"></div>
        <div className="help_info__buttons">
          {isActiveFundation ? (
            <span id="fundations" className="active" onClick={handleOnClick}>
              Fundacjom
            </span>
          ) : (
            <span id="fundations" onClick={handleOnClick}>
              Fundacjom
            </span>
          )}
          {isActiveOrganization ? (
            <span id="organizations" className="active" onClick={handleOnClick}>
              Organizajom pozarządowym
            </span>
          ) : (
            <span id="organizations" onClick={handleOnClick}>
              Organizajom pozarządowym
            </span>
          )}
          {isActiveLocal ? (
            <span id="local" className="active" onClick={handleOnClick}>
              Lokalnym zbiórkom
            </span>
          ) : (
            <span id="local" onClick={handleOnClick}>
              Lokalnym zbiórkom
            </span>
          )}
        </div>
      </div>
      {isActiveFundation ? <Fundations /> : null}
      {isActiveOrganization ? <Organizations /> : null}
      {isActiveLocal ? <LocalCollections /> : null}
    </div>
  );
};

export default Header;
