import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Calendar from "./routes/Calendar";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import ProjectA from "./routes/SpecificProjects/ProjectA";
import Covid19Project from "./routes/SpecificProjects/Covid19Project";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects/projecta" element={<ProjectA />} />
      <Route path="/projects/COVID19Project" element={<Covid19Project />} />
    </Routes>
  );
}

export default App;
