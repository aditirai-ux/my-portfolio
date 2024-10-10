import React from 'react'

const Resume = () => {
  return (
    <div>
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
            <div className="download-btn">
                <a href="https://drive.google.com/file/d/1Y7U2QVX2bJj6Yd1Qy6Dv5n5WV4mz7X5V/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-primary">Download Resume</a>
            </div>
    </div>
  )
}

export default Resume