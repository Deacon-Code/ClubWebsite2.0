import React, { useEffect } from "react";
import Typewriter from "./Hooks/useTypewriter";
import "./HomePageStyle.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="content-container">
        <div className="top-section">
          <div className="typewriter">
            <Typewriter text={"Code\nCreate\nConnect"} />
          </div>
          <div class="mouse"></div>
        </div>
        <div className="bottom-section">
          <div className="heading-home">
            <h1>Pursue Your Technical Dream</h1>
            <p>Join our team today!</p>
          </div>
          <div className="buttons">
            <Link to="/projects" className="btn-home">
              Projects
            </Link>
            <Link to="/about" className="btn-home">
              About
            </Link>
            <Link to="/contact" className="btn-home">
              Contact
            </Link>
            <Link to="/calendar" className="btn-home">
              Schedule
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
