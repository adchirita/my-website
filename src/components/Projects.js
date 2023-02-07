import './Projects.scss'

function Projects() {
  return (
    <main>
      <div class="ProjectsContainer album py-5">
        <div class="container">
          <div class="row row-cols-sm-2 g-5">
            <div class="col">
              <div class="card text-white bg-dark">
                <img src={require('../images/Adventure.png')} class="card-img-top ImageCard"></img>
                <div class="card-body">
                  <p>An app designed to be used in conjuction with tabletop adventure games, where users can register/login and create campaigns. Within each campaign, a user can create markers on any map they upload and assign notes to it.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card text-white bg-dark">
                <img src={require('../images/Jungle.png')} class="card-img-top ImageCard"></img>
                <div class="card-body">
                  <p>An app designed to serve as a commerce platform where a user can navigate a store of shrubbery to select plants they would like to purchase. Addition of plants and various small trees with cart functionality and checkout options.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="row row-cols-sm-2 g-5 py-5">
            <div class="col">
              <div class="card text-white bg-dark">
                <img src={require('../images/Scheduler.png')} class="card-img-top ImageCard"></img>
                <div class="card-body">
                  <p>An app designed to be used in conjuction with tabletop adventure games, where users can register/login and create campaigns. Within each campaign, a user can create markers on any map they upload and assign notes to it.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card text-white bg-dark">
                <img src={require('../images/Jungle.png')} class="card-img-top ImageCard"></img>
                <div class="card-body">
                  <p>An app designed to serve as a commerce platform where a user can navigate a store of shrubbery to select plants they would like to purchase. Addition of plants and various small trees with cart functionality and checkout options.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </main>
  )
}

export default Projects;