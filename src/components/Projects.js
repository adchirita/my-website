import './Projects.scss'

function Projects() {
  return (
    <main>
      <div class="ProjectsContainer album py-5">
        <div class="container">
          <div class="row row-cols-sm-2 g-5">
            <div class="col">
              <div class="card text-white bg-dark">
                <img src={require('../images/Adventure.png')} class="card-img-top"></img>
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
                <img src={require('../images/Adventure.png')} class="card-img-top"></img>
                <div class="card-body">
                  <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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