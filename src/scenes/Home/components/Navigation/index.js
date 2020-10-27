import React from 'react';
import NavigationButton from '../NavigationButton';
import './styles.css';

function NavBar(props) {
  return (
    <div className="navigation">
      <NavigationButton></NavigationButton>
      <nav className={`navigation--menu ${props.active ? 'navigation--menu__active' : ''}`}>
        <div className="navigation-wrapper">
          <ul>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about-me">About me</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;