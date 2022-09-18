import React, { useState } from "react";

import "./Header.scss";

const Header = () => {
  const [toggle, setToggle] = useState("closed");
  console.log(window.innerWidth);
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
          <li className="header__navbar-links active">
            <span>00&nbsp;</span> Home
          </li>
          <li className="header__navbar-links">
            <span>01&nbsp;</span> Destination
          </li>
          <li className="header__navbar-links">
            <span>02&nbsp;</span> Crew
          </li>
          <li className="header__navbar-links">
            <span>03&nbsp;</span> Technology
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
