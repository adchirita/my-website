import Description from "./Description"
import TechStack from "./TechStack";
import './About.scss';

function About() {
  return (
    <div className="container-fluid g-0">
      <div className="AboutContainer d-xxl-flex text-light align-items-center">
        <Description />
        <TechStack />
      </div>
    </div>
  )
}

export default About;