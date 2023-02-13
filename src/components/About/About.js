import Description from "./Description"
import TechStack from "./TechStack";
import './About.scss';

function About() {
  return (
    <div>
      <div className="AboutContainer container-fluid d-xl-flex text-light align-items-center">
        <Description />
        <TechStack />
      </div>
    </div>
  )
}

export default About;