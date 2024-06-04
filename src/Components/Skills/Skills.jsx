import React from "react";
import Headings from "../Headings/Headings";
import './Style.css'
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
            <div className="bar">
              <div className="line percent-70"></div>
            </div>
          </div>
          <div className="bars">
            <div className="text_fields">
              <div className="text">Html</div>
              <div className="percent">70%</div>
            </div>
            <div className="bar">
              <div className="line percent-50 "></div>
            </div>
          </div>
          <div className="bars">
            <div className="text_fields">
              <div className="text">Html</div>
              <div className="percent">70%</div>
            </div>
            <div className="bar">
              <div className="line percent-20"></div>
            </div>
          </div>
          <div className="bars">
            <div className="text_fields">
              <div className="text">Html</div>
              <div className="percent">70%</div>
            </div>
            <div className="bar">
              <div className="line percent-80"></div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="bars">
            <div className="text_fields">
              <div className="text">Html</div>
              <div className="percent">70%</div>
            </div>
            <div className="bar">
              <div className="line percent-70"></div>
            </div>
          </div>
          <div className="bars">
            <div className="text_fields">
              <div className="text">Html</div>
              <div className="percent">70%</div>
            </div>
            <div className="bar">
              <div className="line percent-50 "></div>
            </div>
          </div>
          <div className="bars">
            <div className="text_fields">
              <div className="text">Html</div>
              <div className="percent">70%</div>
            </div>
            <div className="bar">
              <div className="line percent-20"></div>
            </div>
          </div>
          <div className="bars">
            <div className="text_fields">
              <div className="text">Html</div>
              <div className="percent">70%</div>
            </div>
            <div className="bar">
              <div className="line percent-80"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
