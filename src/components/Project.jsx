import React from 'react'
import '../styles/Project.css'
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Breadcrumbs } from '@mui/material';
import '../App.css'; 

const Project = () => { 
    const path = 
        [ 
            { title: 'Home', to: '/' }, 
            { title: 'Projects', to: '/projects' } 
        ]; 

    return ( 
        <section id="projects"
            className="container text-center"> 
            <Breadcrumbs paths={path} /> 
            <h2 className="section-title"> 
                <FontAwesomeIcon icon={faCode} 
                    className="mr-2" /> 
                Projects 
            </h2> 
            <div className="row"> 
                {/* Project 1 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h5 className="card-title"> 
                                Quiz App Website 
                            </h5> 
                            <p className="card-text"> 
                                Designed the UI and implemented 
                                CSS styling for the website. 
                                Used JavaScipt to design interactive  
                                elements across all pages. 
                            </p> 
                        </div> 
                    </div> 
                </div> 
                {/* Project 2 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h5 className="card-title"> 
                                Professional README 
                                Generator 
                            </h5> 
                            <p className="card-text"> 
                                Used JavaScript to develop an 
                                automated README generator for Github projects. 
                                Uses the inquirer package to get user input and create
                                customized content. 
                            </p> 
                        </div> 
                    </div> 
                </div> 
                {/* Project 3 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h5 className="card-title"> 
                                E-commerce Platform 
                            </h5> 
                            <p className="card-text"> 
                                Built a fully functional e-commerce 
                                platform with features like product listing, 
                                cart management, and user authentication using 
                                React, Node.js, and MongoDB. 
                            </p> 
                        </div> 
                    </div> 
                </div>  
            </div> 
        </section> 
    ); 
}; 

export default Project