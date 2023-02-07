import './Navbar.scss';
import { CollectionFill, FileEarmarkTextFill, FilePerson, EnvelopeFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <div className="py-2 NavHeader">
        <div className="px-5">
          <div className="d-flex align-items-center">
            <Link to="/" className="me-auto text-white text-decoration-none">
              <svg className="" width="40" height="32" role="img" aria-label="Bootstrap">

              </svg>
              Andrei Chirita
            </Link>

            <ul className="nav">
              <li>
                <Link to="/about" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="30" height="30">
                    <FilePerson size={30} />
                  </svg>
                  <p className="h4">About</p>
                </Link>
              </li>
              <li>
                <a download="Andrei_Chirita.pdf" href={require("../images/Resume.pdf")} className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="30" height="30">
                    <FileEarmarkTextFill size={30} />
                  </svg>
                  <p className="h4">Resume</p>
                </a>
              </li>
              <li>
                <Link to="/projects" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="30" height="30">
                    <CollectionFill size={30} />
                  </svg>
                  <p className="h4">Projects</p>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link text-white">
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