import './App.scss';
import Navbar from './components/Navbar';
import MainCover from './components/MainCover';
import Projects from './components/Projects';
import Contact from './components/Contact';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import AOS from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      startEvent: 'load',
      offset: 350
    });
    console.log(AOS.init())
  }, [])

  window.addEventListener('load', AOS.refresh);

  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <Routes>

        <Route path="/" element={<MainCover />} />

        <Route path="/about" element={<About />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
