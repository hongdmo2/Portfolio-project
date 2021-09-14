import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
    
} from "react-share";

const Footer = () => {
    return (
        <div id="footer" className ="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>14055 34th ave flushing ny 11354</p>
                        </div>
                        <div className="d-flex">
                            <a href ="tel:917-216-5767">+1(917)-216-5767</a>
                        </div>
                        <div className="d-flex">
                            <p>hongdmo2@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br />
                                <a className="footer-nav">About me</a>
                                <br />
                                <a className="footer-nav">Skills</a>
                                
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br />
                                <a className="footer-nav">Portfolio</a>
                                <br />
                                <a className="footer-nav">Contacts</a>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items center">
                        <div className="d-flex justify-center">
                            <FacebookShareButton
                                url={"https://www.facebook.com/"}
                                quote={"Developer"}
                                hashtag="#javascript"
                            >
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"https://www.facebook.com/"}
                                quote={"Developer"}
                                hashtag="#javascript"
                            >
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>
                            <RedditShareButton
                                url={"https://www.facebook.com/"}
                                quote={"Developer"}
                                hashtag="#javascript"
                            >
                                <RedditIcon className="mx-3" size={36}/>
                            </RedditShareButton>
                            <LinkedinShareButton
                                url={"https://www.facebook.com/"}
                                quote={"Developer"}
                                hashtag="#javascript"
                            >
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                        </div>
                        <div className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Changoh Hong | All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;