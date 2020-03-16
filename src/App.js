import React, { useState } from 'react';
import Header from './components/Header';
import { Route } from 'react-router-dom'
import Projects from './components/Projects';
import About from './components/About'
import Links from './components/Links.js'
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={About} />
      <Route path="/projects" component={Projects} />
      <Links />
    </div>
  );
}

export default App;
