import React from "react";
import "./App.css";
import Landing from "./scenes/Home/components/Landing";
import AboutMe from "./scenes/Home/components/AboutMe";
import Contact from "./scenes/Home/components/Contact";
import Portfolio from "./scenes/Home/components/Portfolio";
import Navigation from "./scenes/Home/components/Navigation";

function App() {
  return (
    <div className="App">
      <Landing aboutMe={<AboutMe />} />
      <Portfolio />
      <Contact />
      <Navigation />
    </div>
  );
}

export default App;
