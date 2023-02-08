import './MainCover.scss';
import { Link } from 'react-router-dom';

function MainCover() {
  return (
    <main className="d-flex flex-row justify-content-center align-items-center text-light MainWrapper">
      <div className="DivContainer px-5">
        <h1 className="display-2 glow"><strong className="fadeIn" id="first">Hey, I'm Andrei.</strong></h1>
        <br />
        <p className="lead text-start fadeIn" id="second">I am a motivated full-stack web developer with proficiency in Javascript, React, NodeJS, and Express
          <br />and am looking for a role where I can apply my knowledge and expertise as a QA Analyst to streamline
          <br />my development process to avoid testing headaches down the road. I am passionate about learning
          <br />various technologies to add to my tech stack and have no trouble staying up to date on the latest tech.</p>
        <br />
        <Link to="/about" className="btn btn-lg btn-light fw-bold border-white fadeIn" id="third">Learn more about me</Link>
      </div>
      <div className="DivContainer px-5 fadeIn"  id="fourth">
        <div>
          <img className="avatar-wobble box" src={require("../images/Selfie.png")} alt=""/>
        </div>
      </div>
    </main>
  )
}

export default MainCover;