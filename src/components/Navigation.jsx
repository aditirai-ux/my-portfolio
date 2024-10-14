import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Nav.css'
import '../App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Nav = () => {
  const currentPage = useLocation().pathname;
  return (
    <>
      <nav>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <h2>
            <Link to='/'
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >Home
            </Link> 
          </h2>
        </li>
        <li className='nav-item'>
          <h2>
            <Link to='/About'
              className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
            >About
            </Link> 
          </h2>
        </li>
        <li className='nav-item'>
          <h2>
            <Link
              to='/Projects'
              className={
                currentPage === '/Projects' ? 'nav-link active' : 'nav-link'
              }
            >
              Projects
            </Link>
          </h2>
        </li>
        <li className='nav-item'>
        <h2>
            <Link
              to='/Contact'
              className={
                currentPage === '/Contact' ? 'nav-link active' : 'nav-link'
              }
            >
              Contact
            </Link>
          </h2>
        </li>
        <li className='nav-item'>
        <h2>
            <Link
              to='/Resume'
              className={
                currentPage === '/Resume' ? 'nav-link active' : 'nav-link'
              }
            >
              Resume
            </Link>
          </h2>
        </li>
      </ul>
    </nav>
    </>


  )
}

export default Nav
