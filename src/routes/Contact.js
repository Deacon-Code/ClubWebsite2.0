import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import ContactPage from "../components/ContactPage";
import useScrollToTop from "../components/Hooks/useScrollToTop.js";

const Contact = () => {
  useScrollToTop();
  return (
    <div>
      <Navbar />
      <HeroImage icon="adress" heading="Contact" text="Get in touch with us!" />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Contact;
