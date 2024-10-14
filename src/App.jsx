// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Project from './pages/Project'
import Footer from './components/Footer'
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {

  return (
    <div>
      <Header />
      <About />
      <Project />
      <Resume />
      <Contact />
      <Footer />
    </div>

  )
}

export default App
