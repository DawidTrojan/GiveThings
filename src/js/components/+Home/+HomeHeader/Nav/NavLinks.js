import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const NavLinks = ({ links }) => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const toggleNav = () => setIsOpenNav(!isOpenNav);

  const toggleAfterClick = e => {
    if (e && e.relatedTarget) {
      e.relatedTarget.click();
    }
    setIsOpenNav(false);
  };

  const useOutsideAlerter = ref => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpenNav(false);
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <>
      <nav
        ref={wrapperRef}
        className={!isOpenNav ? "nav_links" : "toggle_nav--links"}
      >
        <ul className={!isOpenNav ? "nav_list" : "toggle_nav--list"}>
          <div className="toggle_auth--links">{links}</div>
          <li>
            <NavLink onClick={toggleAfterClick} className="nav_navLink" to="/">
              Start
            </NavLink>
          </li>
          <div className="toggleNav_decoration--box ">
            <div className="toggleNav_decoration"></div>
          </div>
          <li>
            <Link
              onClick={toggleAfterClick}
              to="steps_container"
              duration={500}
              smooth={true}
            >
              What we do
            </Link>
          </li>
          <div className="toggleNav_decoration--box ">
            <div className="toggleNav_decoration"></div>
          </div>
          <li>
            <Link
              onClick={toggleAfterClick}
              to="home_aboutUs--container"
              className="ten"
              duration={500}
              smooth={true}
            >
              <span>About us</span>
            </Link>
          </li>
          <div className="toggleNav_decoration--box ">
            <div className="toggleNav_decoration"></div>
          </div>
          <li>
            <Link
              onClick={toggleAfterClick}
              to="help_info--container"
              duration={500}
              smooth={true}
            >
              Foundations and organizations
            </Link>
          </li>
          <div className="toggleNav_decoration--box ">
            <div className="toggleNav_decoration"></div>
          </div>
          <li>
            <Link
              onClick={toggleAfterClick}
              to="home_footer--container"
              duration={500}
              smooth={true}
            >
              Contact
            </Link>
          </li>
          <div className="toggleNav_decoration--box ">
            <div className="toggleNav_decoration"></div>
          </div>
          <i
            onClick={toggleAfterClick}
            className="material-icons burger_menu close"
          >
            close
          </i>
        </ul>
      </nav>
      {!isOpenNav ? (
        <i onClick={toggleNav} className="material-icons burger_menu">
          menu
        </i>
      ) : null}
    </>
  );
};

export default NavLinks;
