import React from "react";
import "./ProjectsCardsStyle.css";
import Clinton from "../assets/Clinton.png";
import { Link } from "react-router-dom";

const ProjectsCards = () => {
  return (
    <div>
      <div className="card-container">
        <div className="row">
          <div className="column">
            <div className="Project-card">
              <img src={Clinton} alt="Clinton" style={{ width: "100%" }} />
              <div className="inside-card-container">
                <h2>Project A</h2>
                <div className="card-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <Link to="/projects/projecta" className="btn-project">
                  See More
                </Link>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="Project-card">
              <img src={Clinton} alt="Clinton" style={{ width: "100%" }} />
              <div className="inside-card-container">
                <h2>Project B</h2>
                <div className="card-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <Link to="/projects/projecta" className="btn-project">
                  See More
                </Link>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="Project-card">
              <img src={Clinton} alt="Clinton" style={{ width: "100%" }} />
              <div className="inside-card-container">
                <h2>Project C</h2>
                <div className="card-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <Link to="/projects/projecta" className="btn-project">
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="Project-card">
              <img src={Clinton} alt="Clinton" style={{ width: "100%" }} />
              <div className="inside-card-container">
                <h2>Project D</h2>
                <div className="card-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <Link to="/projects/projecta" className="btn-project">
                  See More
                </Link>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="Project-card">
              <img src={Clinton} alt="Clinton" style={{ width: "100%" }} />
              <div className="inside-card-container">
                <h2>Project E</h2>
                <div className="card-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <Link to="/projects/projecta" className="btn-project">
                  See More
                </Link>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="Project-card">
              <img src={Clinton} alt="Clinton" style={{ width: "100%" }} />
              <div className="inside-card-container">
                <h2>Project F</h2>
                <div className="card-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <Link to="/projects/projecta" className="btn-project">
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;
