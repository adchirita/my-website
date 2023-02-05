import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import MainCover from './components/MainCover';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/About/About';

function App() {
  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <Routes>

        <Route path="/" element={<MainCover />} />

        <Route path="/about" element={<About />} />

        <Route path="/projects" element={<p>here goes your projects page!</p>} />

        <Route path="/contact" element={<p>here goes your contact page!</p>} />
      </Routes>
    </main>
  );
}

export default App;
