import React from 'react';
import './styles.css';

function NavBar() {
  return (
    <nav className="site-navigation">
      <div className="navigation-wrapper">
        <ul>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about-me">About me</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;