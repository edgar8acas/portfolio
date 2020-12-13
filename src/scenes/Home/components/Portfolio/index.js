import React from "react";
import { Projects } from "./Projects";
import "./styles.css";

function Portfolio() {
  return (
    <section className="site-section" id="portfolio">
      <h2>Portfolio</h2>
      <p>These are some projects I've made for the web.</p>
      <Projects />
    </section>
  );
}

export default Portfolio;
