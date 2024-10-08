import React from 'react'
import '../App.css'

const Contact = () => {
  return (
    <div>
        <h2 className="section-title">Contact</h2>
            <form className="form">
                <label name="name">Name</label>
                <input type="text" id="name" placeholder="Name" />
                
                <label name="email">Email</label>
                <input type="email" id="email" placeholder="Email" />
                
                
                <label name="message">Message</label>
                <textarea id="message" rows="3"></textarea>
                
                <button type="submit" className="btn btn-primary">Submit</button>
                <br />
            </form>
    </div>
  )
}

export default Contact