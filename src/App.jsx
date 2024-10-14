// import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation.jsx';
import './App.css'
// import Header from './components/Header.jsx';
// import Footer from './components/Footer.jsx';

function App() {

  return (
    <div>
      {/* <Header /> */}
      <Nav />
        <main>
          <Outlet />
        </main>
      {/* <Footer /> */}
    </div>

  )
}

export default App
