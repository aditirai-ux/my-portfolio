import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div>
        <footer className='footer'>
            <ul>
                <li id='linkedin'><a href="https://www.linkedin.com/in/aditi-rai-79b14022/" className="fa fa-linkedin"></a></li>
                <li id='github'><a href="https://github.com/aditirai-ux" className="fa fa-github"></a></li>
                <li id='facebook'><a href="https://www.facebook.com/aditi45" className='fa fa-facebook'></a></li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer