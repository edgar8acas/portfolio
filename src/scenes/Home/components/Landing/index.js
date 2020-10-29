import React from "react";
import "./styles.css";

function Landing(props) {
  return (
    <section className="site-section landing">
      <h1 className="greeting" id="about-me">
        ¡Hola!
      </h1>
      {props.aboutMe}
    </section>
  );
}

export default Landing;
