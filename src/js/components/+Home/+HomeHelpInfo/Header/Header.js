import React, { useState } from "react";
import Fundations from "../Fundations";
import Organizations from "../Organizations";
import LocalCollections from "../LocalCollections";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isActiveFundation, setIsActiveFundation] = useState(true);
  const [isActiveOrganization, setIsActiveOrganization] = useState(false);
  const [isActiveLocal, setIsActiveLocal] = useState(false);

  const handleClickFundations = () => {
    setIsActiveOrganization(false);
    setIsActiveLocal(false);
    setIsActiveFundation(true);
  };

  const handleClickOrganizations = () => {
    setIsActiveFundation(false);
    setIsActiveLocal(false);
    setIsActiveOrganization(true);
  };

  const handleClickLocal = () => {
    setIsActiveOrganization(false);
    setIsActiveFundation(false);
    setIsActiveLocal(true);
  };

  return (
    <div className="help_info__container">
      <div className="help_info__header">
        <h4>Komu pomagamy?</h4>
        <div className="help_info__decoration"></div>
        <div className="help_info__buttons">
          <span onClick={handleClickFundations}>Fundacjom</span>
          <span onClick={handleClickOrganizations}>
            Organizajom pozarządowym
          </span>
          <span onClick={handleClickLocal}>Lokalnym zbiórkom</span>
        </div>
      </div>
      {isActiveFundation ? <Fundations /> : null}
      {isActiveOrganization ? <Organizations /> : null}
      {isActiveLocal ? <LocalCollections /> : null}
    </div>
  );
};

export default Header;
