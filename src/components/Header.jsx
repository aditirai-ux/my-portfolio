import React from 'react';
import '../styles/Header.css';
import '../App.css';
import Navbar from './Navigation';

const Header = () => {
  return (
    <div>
        <Navbar />
        <span className="display-4 text-white ho"> 
        Aditi Rai
        </span>
    </div> 
); 
};

export default Header;