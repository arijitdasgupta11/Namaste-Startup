import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/homepage/homepage';
import Funding from "./components/pages/fundingquest";
import BDocuments from "./components/pages/bdocuments";
import Partners from "./components/pages/partners";
import Register from './components/pages/register/register';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './components/homepage/contact';
import Company from './components/pages/BusinessDoc/Pages/Company';
import Gst from './components/pages/BusinessDoc/Pages/Gst';
import Fssai from './components/pages/BusinessDoc/Pages/Fssai';
import Iec from './components/pages/BusinessDoc/Pages/Iec';
import Sar from './components/pages/BusinessDoc/Pages/Sar';
import Tr from './components/pages/BusinessDoc/Pages/Tr';
import Dw from './components/pages/BusinessDoc/Pages/Dw';
import Ec from './components/pages/BusinessDoc/Pages/Ec';
import Lc from './components/pages/BusinessDoc/Pages/Lc';
import Shd from './components/pages/BusinessDoc/Pages/Shd';
import Pa from './components/pages/BusinessDoc/Pages/Pa';


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/fundingquest" element={<Funding />} />
          <Route path="/bdocuments" element={<BDocuments />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/companyr" element={<Company />} />
          <Route path="/gst" element={<Gst />} />
          <Route path="/fss" element={<Fssai />} />
          <Route path="/iec" element={<Iec />} />
          <Route path="/sar" element={<Sar />} />
          <Route path="/mr" element={<Sar />} />
          <Route path="/tr" element={<Tr />} />
          <Route path="/dw" element={<Dw />} />
          <Route path="/ec" element={<Ec />} />
          <Route path="/lc" element={<Lc />} />
          <Route path="/shd" element={<Shd />} />
          <Route path="/pa" element={<Pa />} />
          <Route path="/va" element={<Shd />} />
          <Route path="/pda" element={<Shd />} />
          <Route path="/rra" element={<Shd />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App