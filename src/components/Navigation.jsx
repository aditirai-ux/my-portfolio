import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Nav.css'

const Nav = () => {
  const currentPage = useLocation().pathname;
  return (
    <nav>
      <h1>
        <Link to='/' id='logo'>
            Aditi Rai
        </Link>
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
        <li>
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
        <li>
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
        <li>
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
      </h1>
    </nav>

  )
}

export default Nav
