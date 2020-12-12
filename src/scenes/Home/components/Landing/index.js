import React from "react";
import "./styles.css";

function Landing(props) {
  return (
    <section className="site-section landing" id="about-me">
      <h1 className="greeting">
        ¡Hola!
      </h1>
      {props.aboutMe}
      <a href="#contact" className="contact-me-btn">Contact me!</a>
    </section>
  );
}

export default Landing;
