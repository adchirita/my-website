import './Navbar.scss';
import { CollectionFill, FileEarmarkTextFill, FilePerson, EnvelopeFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <div class="py-2 NavHeader">
        <div class="px-5">
          <div class="d-flex align-items-center">
            <Link to="/" class="me-auto text-white text-decoration-none">
              <svg class="" width="40" height="32" role="img" aria-label="Bootstrap">

              </svg>
              Andrei Chirita
            </Link>

            <ul class="nav">
              <li>
                <Link to="/about" class="nav-link text-white">
                  <svg class="bi d-block mx-auto mb-1" width="30" height="30">
                    <FilePerson size={30} />
                  </svg>
                  <p class="h4">About</p>
                </Link>
              </li>
              <li>
                <a download="Andrei_Chirita.pdf" href={require("../images/Resume.pdf")} class="nav-link text-white">
                  <svg class="bi d-block mx-auto mb-1" width="30" height="30">
                    <FileEarmarkTextFill size={30} />
                  </svg>
                  <p class="h4">Resume</p>
                </a>
              </li>
              <li>
                <Link to="/projects" class="nav-link text-white">
                  <svg class="bi d-block mx-auto mb-1" width="30" height="30">
                    <CollectionFill size={30} />
                  </svg>
                  <p class="h4">Projects</p>
                </Link>
              </li>
              <li>
                <Link to="/contact" class="nav-link text-white">
                  <svg class="bi d-block mx-auto mb-1" width="30" height="30">
                    <EnvelopeFill size={30} />
                  </svg>
                  <p class="h4">Contact</p>
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