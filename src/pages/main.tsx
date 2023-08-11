import React from "react";
import Navbar from "../components/navbar/navbar";
import Session from "../components/navbar/session";

import About from "../contents/About";
import Contact from "../contents/Contact";
import Home from "../contents/Home";
import Project from "../contents/Project";

function Main() {
  const topic = ["Home", "About", "Contact"];

  return (
    <>
      <header className="sticky top-0 z-50">
        <Navbar topics={topic} />
      </header>

      <Session sessionName="Home" content={<Home/>} />
      <Session sessionName="About" content={<About/>} />
      <Session sessionName="Project" content={<Project/>} />
      <Session sessionName="Contact" content={<Contact/>} />
      

    </>
  );
}

export default Main;
