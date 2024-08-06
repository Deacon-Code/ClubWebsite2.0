import React from "react";
import "./FootStyles.css";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaSlack,
  FaSearchLocation,
  FaTwitter,
  FaInstagram,
  FaCalendar,
  FaCalendarAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#000", marginRight: "2rem" }}
            />
            <div>
              <p>Manchester Hall 212</p>
              <h4>Wake Forest University</h4>
            </div>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#000", marginRight: "2rem" }}
              />{" "}
              DeaconCode@WFU.edu
            </h4>
          </div>
          <div className="phone">
            <h4>
              <FaCalendarAlt
                size={20}
                style={{ color: "#000", marginRight: "2rem" }}
              />{" "}
              Mondays from 5:00 - 6:00 PM
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About us</h4>
          <p>
            Deacon Code is Wake Forest University’s premier software engineering
            organization. Focused on technical projects and development, we
            foster innovation and collaboration within the Wake Forest
            community. Join us to code, create, and connect!
          </p>
          <div className="socials">
            <FaInstagram
              size={30}
              style={{ color: "#000", marginRight: "1rem" }}
            />
            <FaSlack size={30} style={{ color: "#000", marginRight: "1rem" }} />
            <FaLinkedin
              size={30}
              style={{ color: "#000", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
