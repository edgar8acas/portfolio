import React from 'react';
import NavBar from '../NavBar';
import './styles.css'

function Header() {
  return (
    <div className="site-section">
      <header className="site-header">
        <h1>Hi, I'm Edgar.</h1>
        <h1>Welcome to my website!</h1>
      </header>
      <h2 className="site-header--nav-tip reappear-navbar-flag"></h2>
      <NavBar></NavBar>
    </div>
  );
}

export default Header;