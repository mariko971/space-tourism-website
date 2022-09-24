import React, { useContext, useState, useLayoutEffect, useRef } from "react";
import { appContext } from "../App";
// import "./_technology.scss";

const Technology = () => {
  const { technology } = useContext(appContext);
  const [techInfo, setTechInfo] = useState({
    index: 0,
    tech: technology[0],
  });

  const { name, images, description } = techInfo.tech;

  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();

  const refs = {
    ref0: firstRef,
    ref1: secondRef,
    ref2: thirdRef,
  };

  let curr = "ref" + techInfo.index;

  useLayoutEffect(() => {
    refs[curr].current.style.backgroundColor = "#fff";
    refs[curr].current.style.color = "#0B0D17";
  }, [curr]);

  const handleClick = (i) => {
    refs[curr].current.style.backgroundColor = "transparent";
    refs[curr].current.style.color = "#fff";
    setTechInfo({ index: i, tech: technology[i] });
  };

  return (
    <section className="technology">
      <h3 className="technology__title">
        <span>03&nbsp;</span> SPACE LAUNCH 101
      </h3>
      <picture>
        <source srcSet={images.portrait} media="(min-width: 1200px)" />
        <img src={images.landscape} alt={name} className="technology__img" />
      </picture>
      <article className="technology__article">
        <ul className="technology__nav">
          <li
            className="technology__nav-link"
            onClick={() => handleClick(0)}
            ref={firstRef}
          >
            <p>1</p>
          </li>
          <li
            className="technology__nav-link"
            onClick={() => handleClick(1)}
            ref={secondRef}
          >
            <p>2</p>
          </li>
          <li
            className="technology__nav-link"
            id="europa"
            onClick={() => handleClick(2)}
            ref={thirdRef}
          >
            <p>3</p>
          </li>
        </ul>
        <article>
          <h1 className="technology__role">THE TERMINOLOGY ...</h1>
          <h1 className="technology__name">{name.toUpperCase()}</h1>
          <p className="technology__text">{description}</p>
        </article>
      </article>
    </section>
  );
};

export default Technology;
