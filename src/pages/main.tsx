import Navbar from "../components/navbar/navbar";
import Session from "../components/session";

import About from "../contents/Main/About";
import Contact from "../contents/Main/Contact";
import Home from "../contents/Main/Home";
import Project from "../contents/Main/Project";

function Main() {
  const topic = ["Home", "About", "Project", "Contact"];

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
