import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import "./styles.css";

function Landing(props) {
  return (
    <section className="site-section landing" id="about-me">
      <h1 className="greeting">
        ¡Hola!
      </h1>
      {props.aboutMe}
      <a href="#contact" className="contact-me-btn">Contact me!</a>
      <div className="social-icons">
        <a href="https://linkedin.com/in/edgarochoadev" title="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
        <a href="https://github.com/edgar8acas/" title="Github" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </section>
  );
}

export default Landing;
