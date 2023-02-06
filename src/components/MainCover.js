import './MainCover.scss';
import { Link } from 'react-router-dom';

function MainCover() {
  return (
    <main class="d-flex flex-row justify-content-center align-items-center text-light MainWrapper">
      <div class="DivContainer px-5">
        <h1 class="display-2"><strong>Hey, I'm Andrei.</strong></h1>
        <br />
        <p class="lead text-start">I am a motivated full-stack web developer with proficiency in Javascript, React, NodeJS, and Express
          <br />and am looking for a role where I can apply my knowledge and expertise as a QA Analyst to streamline
          <br />my development process to avoid testing headaches down the road. I am passionate about learning
          <br />various technologies to add to my tech stack and have no trouble staying up to date on the latest tech.</p>
        <br />
        <Link to="/about" class="btn btn-lg btn-light fw-bold border-white bg-white">Learn more about me</Link>
      </div>
      <div class="DivContainer px-5">
        <div>
          <img class="avatar-wobble box" src={require("../images/Selfie.png")} />
        </div>
      </div>
    </main>
  )
}

export default MainCover;