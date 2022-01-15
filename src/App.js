import React from "react";
import "./style.css";
import Home from './Components/Home';
import Contact from './Components/Contact';
import AboutUs from './Components/Aboutus';
export default function App() {
  return (
    <div>
      <Home />
      <AboutUs/>
      <Contact />
      
    </div>
  );
}
