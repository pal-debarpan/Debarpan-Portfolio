import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import { SITE_NAME } from "../constants";

// info box
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    {/* info text */}
    <p className="font-medium sm:text-xl text-center">{text}</p>

    {/* info right arrow */}
    <Link to={link} className="neo-brutalism-white neo-btn" title={btnText}>
      {btnText}
      <img src={arrow} alt="Arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

// render content (based upon current user cursor location)
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hello, I am <span className="font-semibold">Debarpan Pal</span>
      
      <br />An Aspiring Software Developer from India.
    </h1>
  ),
  2: (
    <InfoBox
      text="My journey and the skills I learned throughout."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects to success over the years. Curious about the impact?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project or looking for a dev? I'm just a few keystrokes away."
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

// home info
const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
