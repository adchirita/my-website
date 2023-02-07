import { Link } from "react-router-dom";

function Description() {
  return (
    <main className="d-flex flex-row justify-content-center align-items-center text-light">
      <div className="px-5">
        <h1 className="display-2 glow"><strong className="fadeIn" id="first">About</strong></h1>
        <br />
        <p className="lead text-start fadeIn" id="second">I am a motivated full-stack web developer with a passion for programming and computer software & hardware.
          As a former QA Analyst, I have developed a strong background in software testing and was exposed to automation
          testing using python and selenium. I worked closely with Bell professionals and developers in agile and waterfall
          methodologies, and have become very familiar with the software development lifecycle. Have served as a Sr. QA Analyst
          to successfully deliver one of Bell's top 3 projects in 2020, in preparation for their new devices and modems to be
          linked with their Maximo database. I aim to take what I have learned as a QA Analyst and apply that to my software
          development mentality, finding and stopping bugs before they reach the test environment. Having experienced automation
          testing, I found a true passion for programming and look to find a fulfilling role as a full-stack web developer where
          I can grow my skills and contribute efficiently to something bigger. </p>
          <br />
          <Link to="/projects" className="btn btn-lg btn-light fw-bold border-white bg-white fadeIn" id="third">Check out some of my projects</Link>
      </div>
    </main>
  )
}

export default Description;