import './Navbar.scss';
import { CollectionFill, FileEarmarkTextFill, FilePerson, EnvelopeFill, List, XLg } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar(props) {
  const setIsNavExpanded = props.setIsNavExpanded;
  const isNavExpanded = props.isNavExpanded;

  return (
    <nav className="py-2 px-5 NavHeader d-flex align-items-center">
      <Link to="/">
        <img className="Logo" src={require('../images/Sig.png')} />
      </Link>
      <button className="btn pt-2 text-white hamburger" type="button" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>
        <svg className="mb-1" width="40" height="40">
          {isNavExpanded ? <XLg size={45} /> : <List size={45} />}
        </svg>
      </button>
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