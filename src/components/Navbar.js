import './Navbar.scss';
import { CollectionFill, FileEarmarkTextFill, FilePerson, EnvelopeFill, List } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
      <nav className="py-2 px-5 NavHeader d-flex align-items-center">
        <Link to="/">
          <img className="Logo" src={require('../images/Sig.png')} />
        </Link>
        <button className="btn pt-2 text-white hamburger" type="button" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>
          <svg className="mb-1" width="40" height="40">
            <List size={45} />
          </svg>
        </button>
        <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
          <ul className="nav pt-2">
            <li>
              <Link to="/about" className="nav-link text-white navIcon">
                <svg className="bi d-block mx-auto mb-1" width="30" height="30">
                  <FilePerson size={30} />
                </svg>
                <p className="h4">About</p>
              </Link>
            </li>
            <li>
              <a download="Andrei_Chirita.pdf" href={require("../images/Resume.pdf")} className="nav-link text-white navIcon">
                <svg className="bi d-block mx-auto mb-1" width="30" height="30">
                  <FileEarmarkTextFill size={30} />
                </svg>
                <p className="h4">Resume</p>
              </a>
            </li>
            <li>
              <Link to="/projects" className="nav-link text-white navIcon">
                <svg className="bi d-block mx-auto mb-1" width="30" height="30">
                  <CollectionFill size={30} />
                </svg>
                <p className="h4">Projects</p>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link text-white navIcon">
                <svg className="bi d-block mx-auto mb-1" width="30" height="30">
                  <EnvelopeFill size={30} />
                </svg>
                <p className="h4">Contact</p>
              </Link>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;