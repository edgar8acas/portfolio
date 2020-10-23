import React from 'react';
import './App.css';
import Header from './scenes/Home/components/Header';
import AboutMe from './scenes/Home/components/AboutMe';
import Contact from './scenes/Home/components/Contact';
import Projects from './scenes/Home/components/Projects';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Projects></Projects>
      <AboutMe></AboutMe>
      <Contact></Contact>
    </div>
  );
}

export default App;
