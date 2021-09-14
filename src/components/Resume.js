import React from "react";
import resume from "../resume.jpg";
import resumepdf from "../RESUME.pdf";

const Resume = () => {
    return (
        <div id="resume" className ="res-container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap">
                        <img className="Resume-img" src={resume} alt="resume...."/>
                    </div>
                </div>
                
                <span className="thanks-wrap col-lg-6 col-xm-12">
                    <h1 className="resume-heading">Thank you for your interest</h1>
                    <p>
                        
                        Please check out my Resume.
                    </p>
                    <a href = {resumepdf} target = "_blank">Resume PDF</a>
                </span>
                
            </div>
            
        </div>
    )
}

export default Resume
