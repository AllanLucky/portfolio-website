import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/HomeScreen';
import Navbar from './Pages/Home/Navbar';
import ContactMe from './Pages/Home/ContactMe';
import MyPortfolio from './Pages/Home/MyPortfolio';
import AboutMe from './Pages/Home/AboutMe';
import Testimonials from './Pages/Home/Testmonials';
import Footer from './Pages/Home/Footer';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<MyPortfolio />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact-me" element={<ContactMe />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
