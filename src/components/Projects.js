import './Projects.scss'

function Projects() {
  return (
    <main>
      <div class="ProjectsContainer album py-5">
        <div class="container">
          <h1 class="text-center pb-5 display-2 text-white glow"><strong>Portfolio</strong></h1>
          <div class="row row-cols-sm-2 g-5">
            <div class="col">
              <div class="card text-white bg-dark">
                <img src={require('../images/Adventure.png')} class="card-img-top ImageCard" alt=""></img>
                <h4 class="card-title text-center pt-3 fw-bold">Adventure Scribe</h4>
                <div class="card-body">
                  <p>An app designed to be used in conjuction with tabletop adventure games, where users can register/login and create campaigns. Within each campaign, a user can create markers on any map they upload and assign notes to it.</p>
                  <div class="d-flex justify-content-center align-items-center">
                    <div class="btn-group flex-wrap py-2">
                      <button type="button" class="btn btn-sm btn-outline-secondary">ReactJS</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">NodeJS</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">SASS</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Leaflet</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Bootstrap</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">ReactRouter</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Express</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">BCryptJS</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card text-white bg-dark">
                <img src={require('../images/Jungle.png')} class="card-img-top ImageCard" alt=""></img>
                <h4 class="card-title text-center pt-3 fw-bold">Jungle</h4>
                <div class="card-body">
                  <p>An app designed to serve as a commerce platform where a user can navigate a store of shrubbery to select plants they would like to purchase. Addition of plants and various small trees with cart functionality and checkout options.</p>
                  <div class="d-flex justify-content-center align-items-center">
                    <div class="btn-group flex-wrap py-2">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Ruby on Rails</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Bootstrap</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">PostrgreSQL</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Stripe</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Cypress</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">CSS</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">RSpec</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row row-cols-sm-2 g-5 py-5">
            <div class="col">
              <div class="card text-white bg-dark">
                <img src={require('../images/Scheduler.png')} class="card-img-top ImageCard" alt=""></img>
                <h4 class="card-title text-center pt-3 fw-bold">Interview Scheduler</h4>
                <div class="card-body">
                  <p>A scheduling app created to help users easily schedule interviews within a 12-5 time frame Monday-Friday. Real-time updates from the database on interview addition, edit, or deletion. User is given a few interviewers to choose from.</p>
                  <div class="d-flex justify-content-center align-items-center">
                    <div class="btn-group flex-wrap py-2">
                      <button type="button" class="btn btn-sm btn-outline-secondary">React</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">CSS</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Axios</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Jest</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Cypress</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Storybook</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">PostgreSQL</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Express</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">NodeJS</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card text-white bg-dark">
                <img src={require('../images/Bazaar.png')} class="card-img-top ImageCard" alt=""></img>
                <h4 class="card-title text-center pt-3 fw-bold">Bazaar</h4>
                <div class="card-body">
                  <p>Bazaar is an app influenced by kijiji, where a user can browse available items for auction and can filter through the items available in the database. Purchases can be made and admins are able to edit, approve, or delete items as they see fit.</p>
                  <div class="d-flex justify-content-center align-items-center">
                    <div class="btn-group flex-wrap py-2">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Javascript</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">HTML</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">SASS</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Bootstrap</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">PostgreSQL</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">NodeJS</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">BCryptJS</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row row-cols-sm-2 g-5">
            <div class="col">
              <div class="card text-white bg-dark">
                <img src={require('../images/Tweeter.png')} class="card-img-top ImageCard" alt=""></img>
                <h4 class="card-title text-center pt-3 fw-bold">Tweeter</h4>
                <div class="card-body">
                  <p>Tweeter is designed to serve as a twitter clone using ajax where the user can create tweets within certain text limitations. These tweets are then displayed in the feed in real time.</p>
                  <div class="d-flex justify-content-center align-items-center">
                    <div class="btn-group flex-wrap py-2">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Javascript</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">AJAX</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">CSS</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">HTML</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">JQuery</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Express</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">BodyParser</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Chance</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card text-white bg-dark">
                <img src={require('../images/TinyApp.png')} class="card-img-top ImageCard" alt=""></img>
                <h4 class="card-title text-center pt-3 fw-bold">TinyApp</h4>
                <div class="card-body">
                  <p>An app designed to shorten links a la bitly, where a user can create an account and create various short links to sites of their choosing, which are then linked to their account. Links can be shared freely with others.</p>
                  <div class="d-flex justify-content-center align-items-center">
                    <div class="btn-group flex-wrap py-2">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Javascript</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Express</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">NodeJS</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">EJS</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">BCryptJS</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">CookieSession</button>
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