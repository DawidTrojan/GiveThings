import React from "react";
import { Link } from "react-scroll";

const NavLinks = () => (
  <div className="nav_links">
    <ul>
      <li>
        <Link to="">Start</Link>
      </li>
      <li>
        <Link to="steps_container" duration={500} smooth={true}>
          O co chodzi
        </Link>
      </li>
      <li>
        <Link to="home_aboutUs__container" duration={500} smooth={true}>
          O nas
        </Link>
      </li>
      <li>
        <Link to="help_info__container" duration={500} smooth={true}>
          Fundacja i organizacje
        </Link>
      </li>
      <li>
        <Link to="home_footer__container">Kontakt</Link>
      </li>
    </ul>
  </div>
);

export default NavLinks;
