import React from "react";
import myLogo from "../logo.png";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container">

            <a className="navbar-brand" href="logo"><img className="logo" src={myLogo} alt="logo..."/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                
                <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="Home">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#0">about me</a>  
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#0">services</a>  
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#0">portfolio</a>  
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#0">contacts</a>  
                    </li>
                                        


                </ul>

            </div>

</div>
        </nav>
    )
}

export default Navbar;