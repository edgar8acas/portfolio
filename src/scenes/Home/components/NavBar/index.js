import React, { useEffect } from 'react';
import './styles.css'

function addNavbarObserver() {
  const observer = new IntersectionObserver(onEntry, { threshold: [1]});
  const observer2 = new IntersectionObserver(onEntryReappear, { threshold: [1]});
  const topNavigation = document.querySelector('.site-navigation');
  const reappearFlagElement = document.querySelector('.reappear-navbar-flag');
  
  observer.observe(topNavigation);
  observer2.observe(reappearFlagElement);

  function onEntry(entries) {
    entries.forEach(change => {
      if(!change.isIntersecting) {
        change.target.classList.add('site-navigation--top');  
      }
    });
  }

  function onEntryReappear(entries) {
    entries.forEach(change => {
      if(change.isIntersecting) {
        topNavigation.classList.remove('site-navigation--top');  
      }
    });
  }
}

function NavBar() {
  useEffect(() => {
    addNavbarObserver();
  })
  return (
    <nav className={`site-navigation`}>
      <div className="navigation-wrapper">
        <ul>
          <li className="site-navigation__link"><a href="#projects">Projects</a></li>
          <li className="site-navigation__link"><a href="#">Blog</a></li>
          <li className="site-navigation__link"><a href="#about-me">About me</a></li>
          <li className="site-navigation__link"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;