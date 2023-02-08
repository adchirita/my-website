import './Navbar.scss';
import { CollectionFill, FileEarmarkTextFill, FilePerson, EnvelopeFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <div className="py-2 NavHeader">
        <div className="px-5">
          <div className="d-flex align-items-center">
            <div class="me-auto">
            <Link to="/">
                <img class="Logo" src={require('../images/Sig.png')} />
            </Link>
            </div>

            <ul className="nav">
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
        </div>
      </div>
    </header>
  );
}

export default Navbar;