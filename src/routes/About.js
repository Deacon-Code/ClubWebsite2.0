import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import AboutComponent from "../components/About";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage icon="robot" heading="About" text="What is Deacon Code?" />
      <AboutComponent />
      <Footer />
    </div>
  );
};

export default About;
