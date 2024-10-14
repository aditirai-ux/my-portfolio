import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Nav.css'

const Navigation = () => {
  return (
    <div className='nav'>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#resume">Resume</a></li>
            </ul>
        </nav>
    </div>

  )
}

export default Navigation
