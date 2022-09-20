import React, { useState, useContext, useRef, useLayoutEffect } from "react";
import { appContext } from "../App";
import "./crew.scss";

const Crew = () => {
  const { crew } = useContext(appContext);
  const [crewMember, setCrewMember] = useState({ index: 0, member: crew[0] });

  const { name, images, role, bio } = crewMember.member;

  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();

  const refs = {
    ref0: firstRef,
    ref1: secondRef,
    ref2: thirdRef,
    ref3: fourthRef,
  };

  let curr = "ref" + crewMember.index;

  useLayoutEffect(() => {
    refs[curr].current.style.opacity = "1";
  }, [curr]);

  const handleClick = (i) => {
    refs[curr].current.style.opacity = "0.17";
    setCrewMember({ index: i, member: crew[i] });
  };

  return (
    <section className="crew">
      <h3 className="crew__title">
        <span>02&nbsp;</span> MEET YOUR CREW
      </h3>
      <article
        className="crew__img"
        style={{ backgroundImage: `url(${images.webp})` }}
      ></article>
      <ul className="crew__nav">
        <li
          className="crew__nav-link"
          onClick={() => handleClick(0)}
          ref={firstRef}
        ></li>
        <li
          className="crew__nav-link"
          onClick={() => handleClick(1)}
          ref={secondRef}
        ></li>
        <li
          className="crew__nav-link"
          id="europa"
          onClick={() => handleClick(2)}
          ref={thirdRef}
        ></li>
        <li
          className="crew__nav-link"
          id="titan"
          onClick={() => handleClick(3)}
          ref={fourthRef}
        ></li>
      </ul>
      <h1 className="crew__role">{role.toUpperCase()}</h1>
      <h1 className="crew__name">{name.toUpperCase()}</h1>
      <p className="crew__text">{bio}</p>
    </section>
  );
};

export default Crew;
