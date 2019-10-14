import React from "react";
import { Link } from "react-scroll";

const NavLinks = () => (
  <div className="nav_links">
    <ul>
      <li>
        <Link>Start</Link>
      </li>
      <li>
        <Link to="steps_container" duration={500} smooth={true}>
          O co chodzi
        </Link>
      </li>
      <li>
        <Link>O nas</Link>
      </li>
      <li>
        <Link>Fundacja i organizacje</Link>
      </li>
      <li>
        <Link>Kontakt</Link>
      </li>
    </ul>
  </div>
);

export default NavLinks;
