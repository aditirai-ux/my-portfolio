import React from 'react';
import { useState } from 'react';
import { validateEmail } from '../utils/helpers.js';
import '../App.css'

const Contact = () => {
  // Create state variables for the fields in the form and set their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Get the value of the input field and set the state based on what the user enters
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
  }

  // Create a function that will handle the submission of the form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMessage('All fields are required');
    } else if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    // If the form is submitted and all fields are filled out, clear the form
    setName('');
    setEmail('');
    setMessage('');
  };


  return (
    <div id='contact' className="container text-center">
        <h2 className="section-title">Contact</h2>
            <form className="form" onSubmit={handleFormSubmit}>
                <label>Name</label>
                <input value= {name} onChange={handleInputChange}
                name="name" type="text" id="name" placeholder="Name" />
                
                <label>Email</label>
                <input value={email} onChange={handleInputChange}
                name="email" type="email" id="email" placeholder="Email" />
                
              
                <label>Message</label>
                <textarea value={message} onChange={handleInputChange}
                name="message" id="message" placeholder="Message"></textarea>  
                
                <button type="submit" className="btn btn-primary">Submit</button>
                <br />
            </form>
            {errorMessage && (
            <div>
            <p className="error-text">{errorMessage}</p>
            </div>
          )}
    </div>
  )
}
}

export default Contact