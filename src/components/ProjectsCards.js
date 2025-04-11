  import React from "react";
import "./ProjectsCardsStyle.css";
import Clinton from "../assets/Clinton.png";
import NYCmap from "../assets/PredictedvsActualCases.png";
import { Link } from "react-router-dom";

const ProjectsCards = () => {
  return (
    <div>
      <div className="card-container">
        <div className="row">
          <div className="column">
            <div className="Project-card">
              <img src={Clinton} alt="ClintonGraph" style={{ width: "100%" }} />
              <div className="inside-card-container">
                <h2>COVID-19 Project</h2>
                <div className="card-info">
                  <p>
                    In the Spring of 2024, a group of students worked to analyze
                    COVID-19 data from New York State. The data included
                    information about the number of cases per 100,000 in each
                    county in the state. Using the Pandas library in Python and
                    polynomial multivariable linear regression, the intention
                    was to experiment with curve fitting to see if reasonable
                    predictions could be made about the future spread of
                    COVID-19 in each county. The quality of the prediction was
                    assed using Mean Absolute Error (MAE). Additionally, there
                    were attempts to integrate the predicative data with Geo
                    Pandas to provide a map of COVID-19 data and its change over
                    time and then to compare this data to prediction. In the
                    future there are hopes that better mapping of the New York
                    state predictive data can occur and that the quality of the
                    prediction can improve with better data analysis techniques.
                  </p>
                </div>
                <Link to="/projects/COVID19Project" className="btn-project">
                  See More
                </Link>
              </div>
            </div>
          </div>
          <div className="column">
            {/*<div className="Project-card">
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
            </div>*/}
          </div>
          <div className="column">
            {/*<div className="Project-card">
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
            </div>*/}
          </div>
        </div>
        <div className="row">
          <div className="column">
            {/*<div className="Project-card">
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
            </div>*/}
          </div>
          <div className="column">
            {/*<div className="Project-card">
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
            </div>*/}
          </div>
          <div className="column">
            {/*<div className="Project-card">
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
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;
