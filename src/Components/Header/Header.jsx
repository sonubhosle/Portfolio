import React from "react";
import { Link } from "react-router-dom";
import { IoLogoDeviantart } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Ri24HoursFill, RiInstagramFill } from "react-icons/ri";
import "./Style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <Link>
          <div className="icon">
            <IoLogoDeviantart />
          </div>
          <div className="name">
            Folio<span>x</span>
          </div>
        </Link>
      </div>
      <div className="right">
        <div className="menus">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
            <div className="services_box">
              <Link>Webswite</Link>
              <Link>Swoftware</Link>
              <Link>Applications</Link>
              <Link>UI/UX</Link>
              <Link>Android</Link>
            </div>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <div className="line"></div>
          <Link to="https://github.com/sonubhosle">
            <FaFacebookF />
          </Link>
          <Link>
            <FaTwitter />
          </Link>
          <Link>
            <FaGithub />
          </Link>
          <Link>
            <RiInstagramFill />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
