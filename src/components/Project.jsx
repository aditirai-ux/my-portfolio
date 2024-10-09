import React from 'react'
import '../styles/Project.css'


const Project = () => {
  return (
    <div>
        <div className="projects">
            <h3>Projects</h3>
                <h4>Project 1</h4>
                <p>Project Description</p>
                <a href="link">Link to Project</a>
                <br />
                <h4>Project 2</h4>
                <p>Project Description</p>
                <a href="link">Link to Project</a>
                <br />
                <h4>Project 3</h4>
                <p>Project Description</p>
                <a href="link">Link to Project</a>
        </div>
        
        <form className="form">
            <label name="contact">Contact:</label>
            <input type="text" id="name" name="name" required></input>
            <label name="email">Email Address:</label>
            <input type="email" id="email" name="email" required></input>
            <label name="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Project