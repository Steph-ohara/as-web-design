import React from "react";
import Navigation from "./components/navbar/Navigation";
import Footer from "./components/footer/Footer"
import Pricing from "./components/Pricing/Pricing"
import Services from "./components/Services/Services"
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation fixed="top" />
        <Routes>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
        </Routes>
        <Footer fixed="bottom" />
      </div>
    </BrowserRouter>
  );
}

export default App;
