import React from 'react';
import Header from './components/Header';
import Resume from './components/Resume';
import Github from './components/Github';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="left"></div>
      <div className="right">
        <div className="right-header">
          <h2>Resume</h2>
          <h2>&</h2>
          <h2>Artifacts</h2>
        </div>
        <div className="artifacts">
          <Resume/>
          <Github/>        
          <Resume/>
          <Github/>
          <Resume/>
          <Github/>
          <Resume/>
          <Github/>
        </div>
        <div className="right-footer"></div>
      </div>
    </div>
  );
}

export default App;
