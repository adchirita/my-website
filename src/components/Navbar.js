import './Navbar.scss';
import { CollectionFill, FileEarmarkTextFill, FilePerson } from 'react-bootstrap-icons';

function Navbar() {
  return (
    <header class="Header">
      <div class="py-2 text-bg-dark">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="me-lg-auto text-white text-decoration-none">
              <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">

              </svg>
              Andrei Chirita
            </a>

            <ul class="nav">
              <li>
                <a href="/about" class="nav-link text-white">
                  <svg class="bi d-block mx-auto mb-1" width="30" height="30">
                    <FilePerson size={30} />
                  </svg>
                  <p class="h4">About</p>
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  <svg class="bi d-block mx-auto mb-1" width="30" height="30">
                    <CollectionFill size={30} />
                  </svg>
                  <p class="h4">Projects</p>
                </a>
              </li>
              <li>
                <a href="/" class="nav-link text-white">
                  <svg class="bi d-block mx-auto mb-1" width="30" height="30">
                    <FileEarmarkTextFill size={30} />
                  </svg>
                  <p class="h4">Contact</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;