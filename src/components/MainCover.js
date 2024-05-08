import './MainCover.scss';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

function MainCover() {
  return (
    <div className="container-fluid g-0">
      <div className="d-lg-flex overflow-scroll align-items-center text-light MainWrapper">
        <div className="py-5 Description">
          <h1 className="display-2"><strong className="fadeIn" id="first">Hey, I'm <p className="glow"><Typewriter
              options={{
                strings: ['Andrei', 'a Full-stack Developer', 'Creative', 'Detail Oriented'],
                autoStart: true,
                loop: true,
              }}
            /></p></strong></h1>
          <br />
          <p className="lead fadeIn mobile-text" id="second">I am a motivated full-stack web developer with proficiency in Javascript, React, NodeJS, and Express
            and am looking for a role where I can apply my knowledge and expertise as a QA Engineer to streamline
            my development process to avoid testing headaches down the road. I am passionate about learning
            various technologies to add to my tech stack and have no trouble staying up to date on the latest tech.</p>
          <br />
          <Link to="/about" className="btn btn-lg btn-light fw-bold border-white fadeIn mobileCoverButton" id="third">Learn more about me</Link>
        </div>
        <div className="py-5 fadeIn boxContainer" id="fourth">
          <img className="avatar-wobble img-fluid box" width={1500} src={require("../images/Selfie.png")} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MainCover;