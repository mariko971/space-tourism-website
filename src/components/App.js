import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import data from "../data.json";
import Home from "./home/home";
import Destination from "./destination/Destination";
import Crew from "./crew/crew";
import Technology from "./technology/technology";
import { pagesBg } from "../backgrounds";
import Header from "./header/Header";

// import "./_App.scss";

export const appContext = createContext(data);

const App = () => {
  const [imgUrl, setImgUrl] = useState("home");
  const { desktop, mobile, tablet } = pagesBg[imgUrl];

  return (
    <appContext.Provider value={data}>
      <div className="app-container">
        <picture>
          <source srcSet={desktop} media="(min-width: 769px)" />
          <source srcSet={tablet} media="(min-width: 376px)" />
          {/* <source srcSet={mobile}  /> */}
          <img src={mobile} alt="background" className="app-container__img" />
        </picture>
        <Header setImgUrl={setImgUrl} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Routes>
      </div>
    </appContext.Provider>
  );
};

export default App;
