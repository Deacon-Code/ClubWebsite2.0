import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import ProjectsCards from "../components/ProjectsCards";
import useScrollToTop from "../components/Hooks/useScrollToTop.js";

const Projects = () => {
  useScrollToTop();
  return (
    <div>
      <Navbar />
      <HeroImage
        icon="computer"
        heading="Projects"
        text="See what we are working on"
      />
      <ProjectsCards />
      <Footer />
    </div>
  );
};

export default Projects;
