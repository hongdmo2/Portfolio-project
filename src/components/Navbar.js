import React from "react";
import myLogo from "../Alex Logo.mp4";
import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // hamburger menu
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">

                <Link smooth={true} className="navbar-brand" href="logo"><video className="logo" autoPlay loop muted src={myLogo} alt="logo..." /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="home" offset={-110} className="nav-link" href="Home">Home <span className="sr-only"></span></Link >
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="about" offset={-110} className="nav-link" href="Aboutme">About me</Link >
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="skills" offset={-110} className="nav-link" href="#0">Skills</Link >
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="portfolio" offset={-110}  className="nav-link" href="#0">Portfolio</Link >
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#0">Experience</Link >
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="contacts" offset={-110}  className="nav-link" href="#0">Contacts</Link >
                        </li>



                    </ul>

                </div>

            </div>
        </nav>
    )
}

export default Navbar;