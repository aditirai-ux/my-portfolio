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
                        APIs, Node.js, Express, MySQL, Sequelize, MongoDB, Mongoose, REST, GraphQL
                    </p>
            </div>
    </div>
  )
}

export default Resume