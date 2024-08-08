import React from "react";
import Navbar from "../components/Navbar";
import Video from "../components/Video"; // Corrected the casing of the file name
import Footer from "../components/Footer";
import HomeTop from "../components/HomePage";
import useScrollToTop from "../components/Hooks/useScrollToTop.js";

const Home = () => {
  useScrollToTop();
  return (
    <div>
      <Navbar />
      <HomeTop />
      <Footer />
    </div>
  );
};

export default Home;
