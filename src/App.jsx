// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Project from './components/Project'
import Footer from './components/Footer'
import About from './components/About';
import Resume from './components/Resume';

function App() {

  return (
    <div>
      <Header />
      <Navigation />
      <About />
      <Project />
      <Resume />
      <Footer />
    </div>

  )
}

export default App
