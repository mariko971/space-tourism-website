import React, { useState, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ setImgUrl }) => {
  const [toggle, setToggle] = useState("closed");

  const homeRef = useRef();
  const destRef = useRef();
  const crewRef = useRef();
  const techRef = useRef();

  const [ref, setRef] = useState(homeRef);

  let currRef = ref;

  // closes the side menu and sets the background image relative to the page url
  const onClickLink = (url, ref) => {
    currRef.current.classList.remove("active");
    setToggle("closed");
    setRef(ref);
    setImgUrl(url);
  };

  useLayoutEffect(() => {
    ref.current.classList.add("active");
  }, [ref]);

  return (
    <header className="header__">
      <img
        src="/assets/shared-assets/logo.svg"
        alt="logo"
        className="header__logo"
      />
      <nav className={`navigation ${toggle}`}>
        <img
          src="/assets/shared-assets/icon-close.svg"
          alt="close menu"
          className="header__menu-close"
          onClick={() => setToggle("closed")}
        />
        <ul className="header__navbar">
          <li
            className="header__navbar-links"
            onClick={() => onClickLink("home", homeRef)}
            ref={homeRef}
          >
            <Link to="/">
              <span>00&nbsp;</span> Home
            </Link>
          </li>
          <li
            className="header__navbar-links"
            onClick={() => onClickLink("destination", destRef)}
            ref={destRef}
          >
            <Link to="/destination">
              <span>01&nbsp;</span> Destination
            </Link>
          </li>
          <li
            className="header__navbar-links"
            onClick={() => onClickLink("crew", crewRef)}
            ref={crewRef}
          >
            <Link to="/crew">
              <span>02&nbsp;</span> Crew
            </Link>
          </li>
          <li
            className="header__navbar-links"
            onClick={() => onClickLink("technology", techRef)}
            ref={techRef}
          >
            <Link to="/technology">
              <span>03&nbsp;</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
      <img
        src="/assets/shared-assets/icon-hamburger.svg"
        alt="menu"
        className="header__menu"
        onClick={() => setToggle("open")}
      />
    </header>
  );
};

export default Header;
