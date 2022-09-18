import React, { createContext } from "react";

import data from "../data.json";
import Home from "../components/home/Home";
import Header from "./header/Header";
import "./App.css";

// console.log(data);

// function widthResizer() {
//   var width = window.innerWidth;
//   console.log(width);
//   return width;
// }
// window.addEventListener("resize", widthResizer);

const appContext = createContext(data);
const App = () => {
  return (
    <appContext.Provider value={data}>
      <div
        className="app-container"
        style={{
          backgroundImage: 'url("/assets/home/background-home-mobile.jpg")',
        }}
      >
        <Header />
        <Home />
      </div>
    </appContext.Provider>
  );
};

export default App;
