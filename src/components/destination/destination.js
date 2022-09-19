import React, { useContext, useState, useRef, useEffect } from "react";
import { appContext } from "../App";

import "./destination.scss";

const Destination = () => {
  const { destinations } = useContext(appContext);
  const [destination, setDestination] = useState(0);
  const { description, distance, name, travel, images } =
    destinations[destination];

  const moonRef = useRef();
  const marsRef = useRef();
  const europaRef = useRef();
  const titanRef = useRef();

  const refs = {
    Moon: moonRef,
    Mars: marsRef,
    Europa: europaRef,
    Titan: titanRef,
  };

  const active = (ref) => {
    ref.current.style.borderBottomColor = "#fff";
    ref.current.style.color = "#fff";
    ref.current.style.borderBottomWidth = "3px";
    ref.current.style.borderBottomStyle = "solid";
  };

  const deactivate = (ref) => {
    ref.current.style.borderBottomColor = "none";
    ref.current.style.color = "inherit";
    ref.current.style.borderBottomWidth = "3px";
    ref.current.style.borderBottomStyle = "none";
  };

  useEffect(() => {
    console.log(name);
    active(refs[name]);
  }, [name]);

  const handleClick = (i) => {
    deactivate(refs[name]);
    setDestination(i);
  };

  return (
    <section className="destination">
      <h3 className="destination__title">
        <span>01&nbsp;</span> PICK YOUR DESTINATION
      </h3>
      <img src={images.png} alt="moon" className="destination__img" />
      <ul className="destination__nav">
        <li
          className="destination__nav-link moon"
          onClick={() => handleClick(0)}
          ref={moonRef}
        >
          MOON
        </li>
        <li
          className="destination__nav-link mars"
          onClick={() => handleClick(1)}
          ref={marsRef}
        >
          MARS
        </li>
        <li
          className="destination__nav-link"
          id="europa"
          onClick={() => handleClick(2)}
          ref={europaRef}
        >
          EUROPA
        </li>
        <li
          className="destination__nav-link"
          id="titan"
          onClick={() => handleClick(3)}
          ref={titanRef}
        >
          TITAN
        </li>
      </ul>
      <h1 className="destination__h1">{name.toUpperCase()}</h1>
      <p className="destination__text">{description}</p>
      <div className="destination__info">
        <h4>AVG. DISTANCE</h4>
        <h1>{distance}</h1>
      </div>
      <div className="destination__info">
        <h4>EST. TRAVEL TIME</h4>
        <h1>{travel}</h1>
      </div>
    </section>
  );
};

export default Destination;
