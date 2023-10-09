import React from 'react';
import './App.css';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Skills from './components/Skills';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Kenneth Peterson's Development Portfolio
      </header>
      <main>
      <NavBar />
      <Projects />
      <Skills />
      <Contacts />
      </main>
    </div>
  );
}

export default App;
