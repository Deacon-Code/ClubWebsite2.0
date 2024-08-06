import React from "react";
import { Link } from "react-router-dom";
import "./VideoStyles.css";

import codingVid from "../assets/ProgrammingLive.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={codingVid} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Pursue Your Technical Dream</h1>
        <p>Join our team today!</p>
        <div className="buttons">
          <Link to="/calendar" className="btn">
            Schedule
          </Link>
          <Link to="/contact" className="btn">
            Contact
          </Link>
          <Link to="/about" className="btn">
            About Us
          </Link>
          <Link to="/projects" className="btn">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
