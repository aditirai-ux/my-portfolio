import React from 'react';
import '../styles/Header.css';
import '../App.css';
import Nav from './Navigation';

const Header = () => {
  return (
    <div>
        <h1 className='header'>
            Aditi Rai
            <Nav />
            {/* <p> 
            Software Developer
            </p> */}
            
        </h1>
        
    </div> 
); 
};

export default Header;