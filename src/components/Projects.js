import './Projects.scss';
import { Link } from 'react-router-dom';

function Projects() {

  return (
    <div className="ProjectsContainer">
      <h1 className="text-center pb-5 display-2 text-white"><strong className="fadeIn" id="first">Portfolio</strong></h1>
      <div className="PortfolioContainer">
        <div className="row g-5">
          <div className="col pe-5" data-aos="fade-right" data-aos-duration="800">
            <Link to="https://github.com/Pitching/adventure_scribe" target="_blank" rel="noreferrer" className="card text-white bg-dark">
              <img src={require('../images/Adventure.png')} className="card-img-top ImageCard" alt=""></img>
              <h4 className="card-title text-center pt-3 fw-bold">Adventure Scribe</h4>
              <div className="card-body">
                <p>An app designed to be used in conjuction with tabletop adventure games, where users can register/login and create campaigns. Within each campaign, a user can create markers on any map they upload and assign notes to it.</p>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="btn-group flex-wrap py-2">
                    <button type="button" className="btn btn-sm btn-outline-secondary">ReactJS</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">NodeJS</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">SASS</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Leaflet</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Bootstrap</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">ReactRouter</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Express</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">BCryptJS</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col ps-5" data-aos="fade-left" data-aos-duration="800">
            <Link to="https://github.com/Pitching/Jungle" target="_blank" rel="noreferrer" className="card text-white bg-dark">
              <img src={require('../images/Jungle.png')} className="card-img-top ImageCard" alt=""></img>
              <h4 className="card-title text-center pt-3 fw-bold">Jungle</h4>
              <div className="card-body">
                <p>An app designed to serve as a commerce platform where a user can navigate a store of shrubbery to select plants they would like to purchase. Addition of plants and various small trees with cart functionality and checkout options.</p>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="btn-group flex-wrap py-2">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Ruby on Rails</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Bootstrap</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">PostrgreSQL</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Stripe</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Cypress</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">CSS</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">RSpec</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="row g-5 py-5">
          <div className="col pe-5" data-aos="fade-right" data-aos-duration="800">
            <Link to="https://github.com/Pitching/scheduler" target="_blank" rel="noreferrer" className="card text-white bg-dark">
              <img src={require('../images/Scheduler.png')} className="card-img-top ImageCard" alt=""></img>
              <h4 className="card-title text-center pt-3 fw-bold">Interview Scheduler</h4>
              <div className="card-body">
                <p>A scheduling app created to help users easily schedule interviews within a 12-5 time frame Monday-Friday. Real-time updates from the database on interview addition, edit, or deletion. User is given a few interviewers to choose from.</p>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="btn-group flex-wrap py-2">
                    <button type="button" className="btn btn-sm btn-outline-secondary">React</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">CSS</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Axios</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Jest</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Cypress</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Storybook</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">PostgreSQL</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Express</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">NodeJS</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col ps-5" data-aos="fade-left" data-aos-duration="800">
            <Link to="https://github.com/Pitching/bazaar" target="_blank" rel="noreferrer" className="card text-white bg-dark">
              <img src={require('../images/Bazaar.png')} className="card-img-top ImageCard" alt=""></img>
              <h4 className="card-title text-center pt-3 fw-bold">Bazaar</h4>
              <div className="card-body">
                <p>Bazaar is an app influenced by kijiji, where a user can browse available items for auction and can filter through the items available in the database. Purchases can be made and admins are able to edit, approve, or delete items as they see fit.</p>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="btn-group flex-wrap py-2">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Javascript</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">HTML</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">SASS</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Bootstrap</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">PostgreSQL</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">NodeJS</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">BCryptJS</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="row g-5">
          <div className="col pe-5" data-aos="fade-right" data-aos-duration="800">
            <Link to="https://github.com/Pitching/tweeter" target="_blank" rel="noreferrer" className="card text-white bg-dark">
              <img src={require('../images/Tweeter.png')} className="card-img-top ImageCard" alt=""></img>
              <h4 className="card-title text-center pt-3 fw-bold">Tweeter</h4>
              <div className="card-body">
                <p>Tweeter is designed to serve as a twitter clone using ajax where the user can create tweets within certain text limitations. These tweets are then displayed in the feed in real time, where a time frame since it was posted is updated.</p>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="btn-group flex-wrap py-2">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Javascript</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">AJAX</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">CSS</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">HTML</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">JQuery</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Express</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">BodyParser</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Chance</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col ps-5" data-aos="fade-left" data-aos-duration="800">
            <Link to="https://github.com/Pitching/TinyApp" target="_blank" rel="noreferrer" className="card text-white bg-dark">
              <img src={require('../images/TinyApp.png')} className="card-img-top ImageCard" alt=""></img>
              <h4 className="card-title text-center pt-3 fw-bold">TinyApp</h4>
              <div className="card-body">
                <p>An app designed to shorten links a la bitly, where a user can create an account and create various short links to sites of their choosing, which are then linked to their account. Links can be shared freely with others.</p>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="btn-group flex-wrap py-2">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Javascript</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Express</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">NodeJS</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">EJS</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">BCryptJS</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">CookieSession</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;