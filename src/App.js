import React from 'react';
import './style.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import AboutUs from './Components/Aboutus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Aboutus" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}
