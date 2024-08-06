import React, { Component } from "react";
import "./HeroImageStyles.css";
import {
  FaCalendar,
  FaComputer,
  FaRobot,
  FaAddressBook,
} from "react-icons/fa6";

export class HeroImage extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
          <h1>
            {this.props.icon === "calendar" && (
              <FaCalendar size={75} style={{ color: "#000" }} />
            )}
            {this.props.icon === "computer" && (
              <FaComputer size={75} style={{ color: "#000" }} />
            )}
            {this.props.icon === "robot" && (
              <FaRobot size={75} style={{ color: "#000" }} />
            )}
            {this.props.icon === "adress" && (
              <FaAddressBook size={75} style={{ color: "#000" }} />
            )}
          </h1>
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImage;
