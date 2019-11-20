import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const NavLinks = ({ profile, links }) => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const toggleNav = () => setIsOpenNav(!isOpenNav);

  const hideMenu = e => {
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
        className={!isOpenNav ? "nav_links" : "toggle_nav__links"}
      >
        <ul className={!isOpenNav ? "nav_list" : "toggle_nav__list"}>
          <div className="toggle_auth__links">{links}</div>
          <li>
            <NavLink onClick={hideMenu} className="nav_navLink" to="/">
              Start
            </NavLink>
          </li>
          <div className="toggleNav_decoration__box ">
            <div className="toggleNav_decoration"></div>
          </div>
          <li>
            <Link
              onClick={hideMenu}
              to="steps_container"
              duration={500}
              smooth={true}
            >
              O co chodzi
            </Link>
          </li>
          <div className="toggleNav_decoration__box ">
            <div className="toggleNav_decoration"></div>
          </div>
          <li>
            <Link
              onClick={hideMenu}
              to="home_aboutUs__container"
              className="ten"
              duration={500}
              smooth={true}
            >
              <span>O nas</span>
            </Link>
          </li>
          <div className="toggleNav_decoration__box ">
            <div className="toggleNav_decoration"></div>
          </div>
          <li>
            <Link
              onClick={hideMenu}
              to="help_info__container"
              duration={500}
              smooth={true}
            >
              Fundacja i organizacje
            </Link>
          </li>
          <div className="toggleNav_decoration__box ">
            <div className="toggleNav_decoration"></div>
          </div>
          <li>
            <Link
              onClick={hideMenu}
              to="home_footer__container"
              duration={500}
              smooth={true}
            >
              Kontakt
            </Link>
          </li>
          <div className="toggleNav_decoration__box ">
            <div className="toggleNav_decoration"></div>
          </div>
          <i
            onClick={toggleNav}
            className="material-icons burger_menu"
            id="close"
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
