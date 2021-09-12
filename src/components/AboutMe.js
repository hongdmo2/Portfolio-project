import React from "react"; //rafce
import author from "../me.jpg";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..." />
                    </div>
                </div>
                <span className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>
                        Hello! I am Changoh. I created responsive portfolio website that are displayed on all devices desktops and smartphones.
                        Flexible hard worker ready to learn and contribute to team success. Experienced in handling multiple assignments with outstanding analytical and problem-solving skills. 
                        Strong ability to applyconcepts of software engineering, programming language, and technical knowledge to interpret business needs and industrystandards. 
                        Highly organized, proactive and punctual with a team-oriented mentality.
                    </p>
                </span>
            </div>
        </div>
    )
}

export default AboutMe
