import React from 'react';
import '../App.css';
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import { faUser } 
    from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id="about"
            className="container text-center"> 
            <div className="row"> 
                <div className="col-md-8 offset-md-2"> 
                    <h2 className="section-title"> 
                        <FontAwesomeIcon icon={faUser} 
                            className="mr-2" /> 
                        About Me 
                    </h2> 
                    <div className="profile-image-container"> 

                        <img src="/user.png"
                            alt="geek pic"
                            className="img-fluid rounded-circle profile-image" /> 
                    </div> 
                    <p className="section-description mt-4"> 
                        I am a budding software developer with over 6 months of 
                        hands-on experience in full-stack web development. My 
                        skills include front end technologies such as Node.js, 
                        JavaScript, HTML, CSS, and Bootstrap. I am passionate about 
                        developing user-friendly, responsive web applications.  
                    </p> 
                </div> 
            </div> 
        </section> 
    ); 
}; 

export default About