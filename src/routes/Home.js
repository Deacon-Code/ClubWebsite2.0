import React from "react";
import Navbar from "../components/Navbar";
import Video from "../components/Video"; // Corrected the casing of the file name
import Footer from "../components/Footer";
import HomeTop from "../components/HomePage";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeTop />
      <Footer />
    </div>
  );
};

export default Home;
