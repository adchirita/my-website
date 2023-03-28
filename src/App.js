import './App.scss';
import Navbar from './components/Navbar';
import MainCover from './components/MainCover';
import Projects from './components/Projects';
import Contact from './components/Contact';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import "aos/dist/aos.css";
import './components/MainCover.scss'

function App() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  AOS.init({
    startEvent: 'load',
    offset: 350
  });

  window.addEventListener('load', AOS.refresh);

  return (
    <main>
      <Navbar setIsNavExpanded={setIsNavExpanded} isNavExpanded={isNavExpanded}/>
      { isNavExpanded ? null : 
            <Routes>
                
            <Route path="/" element={<MainCover />} />
    
            <Route path="/about" element={<About />} />
    
            <Route path="/projects" element={<Projects />} />
    
            <Route path="/contact" element={<Contact />} />
          </Routes>}

    </main>
  );
}

export default App;
