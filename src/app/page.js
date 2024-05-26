'use client'
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Pluma from "./components/Pluma/Pluma";
import Projects from "./components/Projects/Projects";
import RedCircle from "./components/RedCircle/RedCircle";
import SecondMain from "./components/SecondMain/SecondMain";

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const handleToggleHeader = () => {
    setShowHeader(!showHeader);
    setIsHeaderVisible(!isHeaderVisible);
  };


  return (
    <>
      <div id="data-scroll-container">
        <RedCircle onClick={handleToggleHeader} />
        {isHeaderVisible && <Header />}
        {/* <Main /> */}
        <SecondMain />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  );
}