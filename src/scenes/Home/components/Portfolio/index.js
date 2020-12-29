import React from "react";
import { Projects } from "./Projects";
import "./styles.css";

function Portfolio() {
  return (
    <section className="site-section" id="portfolio">
      <h2>Projects</h2>
      <p>Some projects I've made</p>
      <Projects />
    </section>
  );
}

export default Portfolio;
