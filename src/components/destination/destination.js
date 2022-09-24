import React, { useContext, useState, useRef, useLayoutEffect } from "react";
import { appContext } from "../App";
import { activeLink, inActiveLink } from "../../utils";

// import "./_destination.scss";

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

  useLayoutEffect(() => {
    activeLink(refs[name]);
  }, [name]);

  const handleClick = (i) => {
    inActiveLink(refs[name]);
    setDestination(i);
  };

  return (
    <section className="destination">
      <h3 className="destination__title">
        <span>01&nbsp;</span> PICK YOUR DESTINATION
      </h3>
      <aside>
        <img src={images.webp} alt="moon" className="destination__img" />
        <article className="destination__wrapper">
          <ul className="destination__nav">
            <li
              className="destination__nav-link"
              onClick={() => handleClick(0)}
              ref={moonRef}
            >
              MOON
            </li>
            <li
              className="destination__nav-link"
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
          <section className="destination__info">
            <article className="destination__info-article">
              <h4>AVG. DISTANCE</h4>
              <h1>{distance}</h1>
            </article>
            <article className="destination__info-article">
              <h4>EST. TRAVEL TIME</h4>
              <h1>{travel}</h1>
            </article>
          </section>
        </article>
      </aside>
    </section>
  );
};

export default Destination;
