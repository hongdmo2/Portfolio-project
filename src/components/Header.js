import React from "react";
import Typed from "react-typed";
const Header = () => {
    return(
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hi, I'm <span className="Changoh">Changoh.</span></h1>
                <h1>Welcome to my portfolio website!</h1>
                <h1>I'm a</h1>
                
                <Typed
                    className="typed-text"
                    strings={["Innovative","Creative","Collaborative","Communicative"]}
                    typeSpeed={40}
                    backSpeed={40}
                    loop
                />
                <a href="#0" className="btn-main-offer">contact me</a>
                
            </div>
        </div>

    )
}

export default Header;