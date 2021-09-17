import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
const Header = () => {
    return(
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Hi, I'm <span className="Changoh">Alex.</span></h1>
                <h1>Welcome to my portfolio website!</h1>
                <h1>I'm a</h1>
                
                <Typed
                    className="typed-text"
                    strings={["Innovative","Creative","Collaborative","Communicative"]}
                    typeSpeed={40}
                    backSpeed={40}
                    loop
                />
                
                <Link smooth={true} to="contacts" className="btn-main-offer">contact me</Link>
                
            </div>
        </div>

    )
}

export default Header;