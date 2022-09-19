import React, { createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import data from "../data.json";
import Home from "../components/home/Home";
import Destination from "./destination/Destination";
import Header from "./header/Header";

import "./App.css";

export const appContext = createContext(data);
const App = () => {
  let url = window.location.pathname;
  let backgroundUrl = 'url("/assets/home/background-home-mobile.jpg")';

  return (
    <appContext.Provider value={data}>
      <div
        className="app-container"
        style={{
          backgroundImage:
            'url("/assets/technology/background-technology-mobile.jpg")',
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destination />} />
        </Routes>
      </div>
    </appContext.Provider>
  );
};

export default App;
