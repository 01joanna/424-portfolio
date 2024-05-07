'use client'
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Pluma from "./components/Pluma/Pluma";
import Projects from "./components/Projects/Projects";

export default function Home() {

  return (
    <>
      <Header />
      <div>
        <Main />
        {/* <Projects /> */}
        <Pluma id="pluma" />
        <Footer id="footer" />
      </div>
    </>
  );
}
