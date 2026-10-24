import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import { SITE_NAME } from "../constants";

// info box
const InfoBox = ({ text, link, btnText, stage }) => (
  <div className="info-box">
    {/* info text */}
    <p className="font-medium sm:text-xl text-center">{text}</p>

    {/* info right arrow */}
    <Link
      to={link}
      state={{ returnStage: stage, guideDismissed: true }}
      className="neo-brutalism-white neo-btn"
      title={btnText}
    >
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
      <span className="block mt-1 text-xs sm:text-sm font-normal opacity-90">Rotate the island to discover more.</span>
    </h1>
  ),
  2: (
    <InfoBox
      text="My journey and the skills I learned throughout."
      link="/about"
      btnText="Learn more"
      stage={2}
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects to success over the years. Curious about the impact?"
      link="/projects"
      btnText="Visit my portfolio"
      stage={3}
    />
  ),
  4: (
    <InfoBox
      text="Need a project or looking for a dev? I'm just a few keystrokes away."
      link="/contact"
      btnText="Let's talk"
      stage={4}
    />
  ),
};

// home info
const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
