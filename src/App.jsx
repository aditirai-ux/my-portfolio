// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Project from './components/Project'
import Footer from './components/Footer'
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

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
