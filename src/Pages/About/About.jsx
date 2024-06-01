import React from "react";
import Headings from "../../Components/Headings/Headings";

const About = ({ sm_heading, heading }) => {
  return (
    <div className="about">
      <Headings sm_heading={sm_heading} heading={heading} />
    </div>
  );
};

export default About;
