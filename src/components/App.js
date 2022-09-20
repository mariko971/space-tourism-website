import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import data from "../data.json";
import Home from "../components/home/Home";
import Destination from "./destination/Destination";
import Crew from "./crew/crew";
import Technology from "./technology/technology";
import { backgrounds } from "../backgrounds";
import Header from "./header/Header";

import "./App.css";

export const appContext = createContext(data);

const App = () => {
  const [imgUrl, setImgUrl] = useState("home");
  const { mobile, tablet, desktop } = backgrounds;

  return (
    <appContext.Provider value={data}>
      <div
        className="app-container"
        style={{
          backgroundImage: mobile[imgUrl],
        }}
      >
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
