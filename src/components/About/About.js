import Description from "./Description"
import TechStack from "./TechStack";
import './About.scss';

function About() {
  return (
    <div>
      <div class="AboutContainer d-flex col-md-9 text-light align-items-center justify-content-start">
        <Description />
        <TechStack />
      </div>
    </div>
  )
}

export default About;