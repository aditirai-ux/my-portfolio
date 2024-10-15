import React from 'react'
import '../styles/Project.css'
import '../App.css'; 

const Project = () => { 
    return ( 
    <section id="projects" className="container text-center">
        <h2 className="section-title">Projects</h2>
        {/* Project 1 */} 
            <div className="card-body"> 
                <h5 className="card-title">Quiz App Website</h5> 
                    <p className="card-text"> 
                        Designed the UI and implemented 
                        CSS styling for the website. 
                        Used JavaScipt to design interactive  
                        elements across all pages. 
                    </p> 
            </div> 
        {/* Project 2 */} 
            <div className="card-body"> 
                <h5 className="card-title">Professional README Generator</h5> 
                    <p className="card-text"> 
                        Used JavaScript to develop an 
                        automated README generator for Github projects. 
                        Uses the inquirer package to get user input and create
                        customized content. 
                    </p> 
            </div> 
                    
                 
        {/* Project 3 */} 
            <div className="card-body"> 
                <h5 className="card-title">Weather Dashboard</h5> 
                    <p className="card-text">  
                        Built a weather dashboard that allows users to search 
                        for the weather by city. Displays the current weather
                        as well as a five-day forecast, including temperature,
                        humidity, and conditions.
                    </p> 
            </div>        
        </section> 
    ); 
}; 

export default Project