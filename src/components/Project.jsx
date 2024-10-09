import React from 'react'
const styles = {
    backgroundColor: '#004f8c',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial'
}

const Project = () => {
  return (
    <div style={styles.backgroundColor}>
        <h3>Projects</h3>
        <ul>
            <li>
                <h4>Project 1</h4>
                <p>Description of Project 1</p>
            </li>
            <li>
                <h4>Project 2</h4>
                <p>Description of Project 2</p>
            </li>
            <li>
                <h4>Project 3</h4>
                <p>Description of Project 3</p>
            </li>
        </ul>
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