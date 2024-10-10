import React from 'react';
import '../styles/Header.css';
import '../App.css';
import Navbar from './Navigation';

const Header = () => {
  return (
    <div>
        <h1 className='header'>
            <span className="display-4 text-white ho">Aditi Rai</span>
            <p className="display-4 text-white ho"> 
            Software Developer
            </p>
            <Navbar />
        </h1>
        
    </div> 
); 
};

export default Header;