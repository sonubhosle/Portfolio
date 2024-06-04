import React from "react";
import Headings from "../../Components/Headings/Headings";
import './Style.css'
const About = ({ sm_heading, heading }) => {
  return (
    <div className="about">
      <Headings sm_heading={sm_heading} heading={heading} />
      <div className="about_details">
        <div className="images">
          <img src="https://marketifythemes.net/html/foliox/img/about/1.png" alt="" />
           <div className="overlay">
           <img src="https://marketifythemes.net/html/foliox/img/about/1.png" alt="" />
           </div>
        </div>
        <div className="info">
          <h2>About Me</h2>
          <div className="desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat.</div>
          <div className="content">
            <div className="left">
              <div className="name">Name</div>
              <p>Sonu Bhosle</p>
              <div className="name">Email</div>
              <p>sbhosle1011W@gmail.com</p>
              <div className="name">Phone</div>
              <p>+918080987767</p>
            </div>
            <div className="right">
            <div className="name">Address</div>
              <p>xyz 431512</p>
              <div className="name">Degree</div>
              <p>Master</p>
              <div className="name">Web Developer</div>
              <p>Avalabel</p>
            </div>
          </div>
          <a href="" download={'https://marketifythemes.net/html/foliox/img/about/1.png'} className="button">Download CV</a>

        </div>
      </div>
    </div>
  );
};

export default About;
