import React from "react";
import Typed from "react-typed";
const Header = () => {
    return(
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Welcome to my personal website</h1>
                <h1>Welcome</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Facebook ads SMM", "Google ads"]}
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