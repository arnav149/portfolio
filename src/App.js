import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Coursework from './components/Coursework';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Other from './components/Other'

function App() {
  return (
    <div id="colorlib-page">
  		<div className="container-wrap">
      <Sidebar></Sidebar>
        <div id="colorlib-main">
          <Home></Home>
          <About></About>
          <Skills></Skills>
          <Experience></Experience>
          <Projects></Projects>
          <Coursework></Coursework>
          <Other></Other>
        </div>
      </div>
    </div>
  );
}

export default App;
