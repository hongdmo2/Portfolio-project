import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faJava, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5"> my skills </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-lg-3 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faReact} size="2x" /></div>
                                <h3>React</h3>
                                <p>open-source front-end JavaScript library for building user interfaces.</p>
                            </div>
                        </div>
                        {/* */}
                        <div className="col-lg-3 col-md-6 col-lg-3 col-sm-6">
                            <div className="box">
                             <div className="circle"><FontAwesomeIcon className="icon" icon={faJava} size="2x" /></div>
                                <h3>Java</h3>
                                <p>High-level, class-based, object-oriented programming language.</p>
                            </div>
                        </div>
                        {/* */}
                        <div className="col-lg-3 col-md-6 col-lg-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faPython} size="2x" /></div>
                                <h3>Python</h3>
                                <p>Interpreted high-level general-purpose programming language</p>
                            </div>
                        </div>
                        {/* */}
                        <div className="col-lg-3 col-md-6 col-lg-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDatabase} size="2x" /></div>
                                <h3>SQL</h3>
                                <p>Domain-specific language used in programming and designed for managing data held in a relational database management system.</p>
                            </div>
                        </div>
                        {/* */}
                    </div>
                </div>
            </div>
            
       
    )
}

export default Services
