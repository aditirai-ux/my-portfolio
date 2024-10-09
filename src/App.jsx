import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Project from './components/Project'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Navigation />
      <Project />
      <Footer />
    </>
  )
}

export default App
