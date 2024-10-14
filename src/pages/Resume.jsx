import React from 'react'

const Resume = () => {
  return (
    <div className="container text-center">
        <h2 className="section-title">Resume</h2>
            <div className="card-body">
                <h5 className="card-title">Front-End Proficiencies</h5>
                    <p className="card-text">
                        HTML, CSS, JavaScript, Typescript, responsive design, React, Bootstrap
                    </p>
            </div>
            <div className="card-body">
                <h5 className="card-title">Back-End Proficiencies</h5>
                    <p className="card-text">
                        APIs, Node.js, Express, MySQL, REST, Python
                    </p>
            </div>
            <div className="download-btn" style={{display: 'inline-block'}}>
                <a href="https://docs.google.com/document/d/1x9dCDxzjG6BTEpKvy-0zRyx2fOq5ZPn5/edit?usp=sharing&ouid=113790504171418675725&rtpof=true&sd=true" target="_blank" rel="noreferrer" className="btn btn-primary">Download Resume</a>
            </div>
    </div>
  )
}

export default Resume