import React from "react";
import Headings from "../Headings/Headings";

const Skills = ({ sm_heading, heading }) => {
  return (
    <div>
      <Headings sm_heading={sm_heading} heading={heading} />
      <div className="skills">
        <div className="left">
          <div className="bars">
            <div className="text_fields">
              <div className="text">Html</div>
              <div className="percent">70%</div>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Skills;
