import React from 'react'

const Project = () => {
  return (
    <div>
        <form>
            <label for="contact">Contact:</label>
            <input type="text" id="name" name="name" required></input>
            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" required></input>
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Project