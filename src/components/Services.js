import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faPython } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5"> my services </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-lg-3 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                                <h3>Web Design</h3>
                                <p>I approach each project individually and always focus on the results</p>
                            </div>
                        </div>
                        {/* */}
                        <div className="col-lg-3 col-md-6 col-lg-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                                <h3>Web Development</h3>
                                <p>Your website will be built with new proven technologies.</p>
                            </div>
                        </div>
                        {/* */}
                        <div className="col-lg-3 col-md-6 col-lg-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faPython} size="2x" /></div>
                                <h3>Facebook Ads SMn</h3>
                                <p>your potential client will see your services or product on facebook</p>
                            </div>
                        </div>
                        {/* */}
                        <div className="col-lg-3 col-md-6 col-lg-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faAws} size="2x" /></div>
                                <h3>Facebook Ads SMn</h3>
                                <p>your servies or product will appear at the top of the google search</p>
                            </div>
                        </div>
                        {/* */}
                    </div>
                </div>
            </div>
            
       
    )
}

export default Services
