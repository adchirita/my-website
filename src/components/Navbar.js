import './Navbar.scss';
import { CollectionFill, FileEarmarkTextFill, FilePerson } from 'react-bootstrap-icons';

function Navbar() {
  return (
    <header>
      <div class="px-3 py-2 text-bg-dark">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
              <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">

              </svg>
              Andrei Chirita
            </a>

            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0">
              <li>
                <a href="#" class="nav-link text-white">
                  <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                    <FilePerson size={24} />
                  </svg>
                  About
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                    <FileEarmarkTextFill size={24} />
                  </svg>
                  Resume
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                    <CollectionFill size={24} />
                  </svg>
                  Projects
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