import React from 'react';
import '../styles/Header.css';
import '../App.css';
import Navbar from './Navigation';

const Header = () => {
  return (
    <div>
        <h1 className='header'>
            Aditi Rai
            <Navbar />
            {/* <p> 
            Software Developer
            </p> */}
            
        </h1>
        
    </div> 
); 
};

export default Header;