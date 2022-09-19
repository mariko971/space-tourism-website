import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  const [toggle, setToggle] = useState("closed");
  const onClickLink = () => {
    setToggle("closed");
  };
  return (
    <header className="header__">
      <img src="/assets/shared/logo.svg" alt="logo" className="header__logo" />
      <nav className={`navigation ${toggle}`}>
        <img
          src="/assets/shared/icon-close.svg"
          alt="close menu"
          className="header__menu-close"
          onClick={() => setToggle("closed")}
        />
        <ul className="header__navbar">
          <li className="header__navbar-links active" onClick={onClickLink}>
            <Link to="/">
              <span>00&nbsp;</span> Home
            </Link>
          </li>
          <li className="header__navbar-links" onClick={onClickLink}>
            <Link to="/destination">
              <span>01&nbsp;</span> Destination
            </Link>
          </li>
          <li className="header__navbar-links" onClick={onClickLink}>
            <Link to="/crew">
              <span>02&nbsp;</span> Crew
            </Link>
          </li>
          <li className="header__navbar-links" onClick={onClickLink}>
            <Link to="/technology">
              <span>03&nbsp;</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
      <img
        src="/assets/shared/icon-hamburger.svg"
        alt="menu"
        className="header__menu"
        onClick={() => setToggle("open")}
      />
    </header>
  );
};

export default Header;
