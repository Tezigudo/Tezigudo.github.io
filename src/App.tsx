import React from 'react';

import './App.css';
import Navbar from './components/navbar/navbar';

function App() {
  const topic = ["Home", "About", "Contact"];
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Navbar topics={topic} />
      </header>
    </div>
  );
}

export default App;
