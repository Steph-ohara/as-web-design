import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Navigation from "./components/navbar/Navigation";
import Footer from "./components/footer/Footer"
import Pricing from "./components/Pricing/Pricing"
import WebDesign from "./components/Services/WebDesign"
import SocialMedia from "./components/Services/SocialMedia";
import LogoDesign from "./components/Services/LogoDesign";
import Contact from "./components/contact/Contact"


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation fixed="top" />
        
        <Routes>
        <Route path="/Web-Design" element={<WebDesign/>}/>
        <Route path="/Social-Media" element={<SocialMedia/>}/>
        <Route path="/Logo-Design" element={<LogoDesign/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        
        <Footer fixed="bottom" />
      </div>
    </BrowserRouter>
  );
}

export default App;
