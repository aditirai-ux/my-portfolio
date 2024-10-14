// import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation';
import './App.css'

function App() {

  return (
    <div>
       <Nav />
        <main>
          <Outlet />
        </main>
    </div>

  )
}

export default App
