import React from "react";
import "./style.css";
import Home from './Components/Home';
import Contact from './Components/Contact';
import AboutUs from './Components/Aboutus';
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" elements={<Home/>}/>
          <Route path="/Contact" elements={<Contact/>}/>
          <Route path="/Aboutus" elements={<AboutUs/>}/>
        </Routes>
      </Router>

      
    </div>
  );
}
