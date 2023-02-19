import './Navbar.scss';
import { XLg } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar(props) {
  const setIsNavExpanded = props.setIsNavExpanded;
  const isNavExpanded = props.isNavExpanded;

  return (
    <nav className="py-2 NavHeader d-flex align-items-center">
      <Link to="/">
        <img className="Logo" src={require('../images/Sig.png')} alt="MainLogo" />
      </Link>
      <Link to="/" className="hamburger">
        <img className="SigLogoName" src={require('../images/SigName.png')} alt="MainLogo" />
      </Link>
      <div className="mb-1 pt-2 text-white hamburger" width="40" height="50" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>
        {isNavExpanded ? <XLg size={40} /> : <img className="SigLogo turned" src={require('../images/SigLogo.png')} alt="SigLogo" />}
      </div>
      <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul className="nav pt-2">
          <li>
            <Link to="/about" className="nav-link text-white navIcon" onClick={() => { setIsNavExpanded(false) }}>
              <p className="h4">About</p>
            </Link>
          </li>
          <li>
            <a download="Andrei_Chirita.pdf" href={require("../images/Resume.pdf")} className="nav-link text-white navIcon">
              <p className="h4">Resume</p>
            </a>
          </li>
          <li>
            <Link to="/projects" className="nav-link text-white navIcon" onClick={() => { setIsNavExpanded(false) }}>
              <p className="h4">Projects</p>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link text-white navIcon" onClick={() => { setIsNavExpanded(false) }}>
              <p className="h4">Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;