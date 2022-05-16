import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Navigation from "./components/navbar/Navigation";
import Footer from "./components/footer/Footer"
import Pricing from "./components/pricing/Pricing"
import WebDesign from "./components/services/WebDesign"
import SocialMedia from "./components/services/SocialMedia";
import LogoDesign from "./components/services/LogoDesign";
import Contact from "./components/contact/Contact"
import About from "./components/about/About"


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation fixed="top" />
        
        <Routes>
        <Route path="/About" element={<About/>}/>
        <Route path="/Web-Design" element={<WebDesign/>}/>
        <Route path="/Social-Media" element={<SocialMedia/>}/>
        <Route path="/Logo-Design" element={<LogoDesign/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        
        <Footer className='position-absolute bottom-0 start-50 translate-middle-x' />
      </div>
    </BrowserRouter>
  );
}

export default App;
