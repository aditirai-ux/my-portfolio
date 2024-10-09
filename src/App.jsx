// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Project from './components/Project'
import Footer from './components/Footer'
import About from './components/About';

function App() {

  return (
    <Router>
      <div>
        <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Project />} /> 
            {/* <Route path="/resume" element={<Resume />} /> 
            <Route path="/contact" element={<Contact />} /> */}
          </ Routes>
        <Navigation />
        <Project />
        <Footer />
      </div>
    </Router>

  )
}

export default App
