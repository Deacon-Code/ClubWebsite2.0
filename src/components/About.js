import React, { useState } from "react";
import "./AboutStyles.css";
import DeaconCodeRobot from "../assets/DeaconCodeRobot.png";
import TylerPassyn from "../assets/TylerPassyn.jpg";
import AthenaHartigan from "../assets/AthenaHartigan.jpg";
import JasonBoyd from "../assets/JasonBoyd.jpg";
import Clinton from "../assets/Clinton.png";
import { FaCircle } from "react-icons/fa";

const About = () => {
  const [showPopup, setShowPopup] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div className="about">
      <div className="QandA">
        <div className="about-text">
          <h1>Who are we?</h1>
          <p>
            <FaCircle className="dotIcon" />
            Founded in the spring of 2024, Deacon Code is a community of Wake
            Forest students interested in software engineering. We provide
            opportunities for students to improve their skills in software
            development and create technical projects that interest them. We
            will do our best to find a project and team for you that fits your
            interests and skill level.
          </p>
          <h1>Do I need experience to join?</h1>
          <p>
            <FaCircle className="dotIcon" />
            No experience is required. We are open to all students, regardless
            of previous technical or programming experience.
          </p>
          <h1>What do we do?</h1>
          <p>
            <FaCircle className="dotIcon" />
            Deacon Code facilitates student devlopment in software engineering
            by providing a platform for students to work on technical projects.
            These projects can range from web development to machine learning.
            We will also have hackathons, workshops, and guest speakers to help
            you learn more about software engineering and the tech industry.
          </p>
          <h1>When do you meet?</h1>
          <p>
            <FaCircle className="dotIcon" />
            We meet every Monday from 5:00 - 6:00 PM in Manchester Hall 212.
            Please note that this location might change and so joining the
            GroupMe is the best way to keep up with any location changes. We
            will also have additional meetings for project teams, as scheduled
            by project team leaders
          </p>
          <h1>How can I get updates?</h1>
          <p>
            <FaCircle className="dotIcon" />
            Join our GroupMe to stay updated on our events and projects. You can
            go to our contact page to join our GroupMe.
          </p>
        </div>
      </div>
      <div className="midsection-container">
        <h1 className="align-center-header">Meet the Team</h1>
      </div>
      <div className="personel">
        <div class="row">
          <div class="column">
            <div class="card">
              <img
                src={TylerPassyn}
                alt="President"
                style={{ width: "100%" }}
              />
              <div class="container">
                <h2>Tyler Passyn</h2>
                <p class="title-about"> President</p>
                <p>Class of 2026</p>
                <p>passta23@wfu.edu</p>
                <p
                  className="btn"
                  onClick={() => copyToClipboard("passta23@wfu.edu")}
                >
                  {" "}
                  Contact
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img
                src={JasonBoyd}
                alt="Vice President"
                style={{ width: "100%" }}
              />
              <div class="container">
                <h2>Jason Boyd</h2>
                <p class="title-about">Vice President</p>
                <p>Class of 2027</p>
                <p>boydje23@wfu.edu</p>
                <p
                  className="btn"
                  onClick={() => copyToClipboard("boydje23@wfu.edu")}
                >
                  {" "}
                  Contact
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img
                src={AthenaHartigan}
                alt="Technical Lead1"
                style={{ width: "100%" }}
              />
              <div class="container">
                <h2>Athena Hartigan</h2>
                <p class="title-about">Technical Lead</p>
                <p>Class of 2025</p>
                <p>hartag21@wfu.edu</p>
                <p
                  className="btn"
                  onClick={() => copyToClipboard("hartag21@wfu.edu")}
                >
                  {" "}
                  Contact
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*<div class="row">
          <div class="column">
            <div class="card">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Jimmy_McGill_BCS_S3.png/220px-Jimmy_McGill_BCS_S3.png"
                alt="Technical Lead1"
                style={{ width: "100%" }}
              />
              <div class="container">
                <h2>Saul Goodman</h2>
                <p class="title-about">Technical Lead</p>
                <p>Class of 2027</p>
                <p>example@example.com</p>
                <p
                  className="btn"
                  onClick={() => copyToClipboard("jimmyMcgill@gmail.com")}
                >
                  {" "}
                  Contact
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Gustavo_Fring_BCS_S3E10.png/220px-Gustavo_Fring_BCS_S3E10.png"
                alt="Technical Lead2"
                style={{ width: "100%" }}
              />
              <div class="container">
                <h2>Gus Fring</h2>
                <p class="title-about">Technical Lead</p>
                <p>Class of 2025</p>
                <p>example@example.com</p>
                <p
                  className="btn"
                  onClick={() => copyToClipboard("example@example.com")}
                >
                  {" "}
                  Contact
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Jesse_Pinkman_S5B.png/220px-Jesse_Pinkman_S5B.png"
                alt="Technical Lead3"
                style={{ width: "100%" }}
              />
              <div class="container">
                <h2>Jesse Pinkman</h2>
                <p class="title-about">Technical Lead</p>
                <p>Class of 2026</p>
                <p>example@example.com</p>
                <p
                  className="btn"
                  onClick={() => copyToClipboard("example@example.com")}
                >
                  {" "}
                  Contact
                </p>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
      <div className={`popup ${showPopup ? "show" : ""}`}>Email copied!</div>
    </div>
  );
};

export default About;
