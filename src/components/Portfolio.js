import React from "react";
import chat_app1 from "../chat_app1.png"
import chat_app from "../chat_app2.png";
import bank_app from "../Bank_application.png";
import portfolio_app from "../portfolio.png";
//FONTAWESOME imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

export const Portfolio = () => {
    // Chat-application
    const openPopupboxChatapp = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={chat_app} alt="chat app ..." />
                <p>
                    ReactJS, Chat Engine, APIs, UI kit
                </p>

                <b>Github:</b> <button className="hyper-link" onClick={() => window.open("https://github.com/hongdmo2/React_chat_application")}>
                    https://github.com/hongdmo2/React_chat_application
                </button>
            </>)
        PopupboxManager.open({ content,
            config: {
                titleBar: {
                    enable: true,
                    text: 'Chat Application'
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
        
    }
    
    
    // Bank-application
    const openPopupboxBankapp = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={bank_app} alt="bank app ..." />
                <p>
                    JAVA,  7 Different Deisign Patterns
                </p>


                <b>Github:</b> <button className="hyper-link" onClick={() => window.open("https://github.com/hongdmo2/CS370-Project1")}>
                    https://github.com/hongdmo2/CS370-Project1
                </button>
            </>)
        PopupboxManager.open({ content,
            config: {
                titleBar: {
                    enable: true,
                    text: "Bank Application"
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }

    
    // PortFolio
    const openPopupboxPortfolio = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={portfolio_app} alt="chat app ..." />
                <p>
                    ReactJS, Bootstrap, HTML, CSS
                </p>
                <b>Github:</b> <button className="hyper-link" onClick={() => window.open("https://github.com/hongdmo2/Portfolio-project")}>
                    https://github.com/hongdmo2/Portfolio-project
                </button>
            </>)
        PopupboxManager.open({ content,
            config: {
                titleBar: {
                    enable: true,
                    text: "PortFolio"
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
        })
    }

    
    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxChatapp}>
                        <img className="portfolio-image" src={chat_app1} alt="Chat Application Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                    </div>

                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxBankapp} >
                        <img className="portfolio-image" src={bank_app} alt="Bank Application Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                    </div>

                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
                        <img className="portfolio-image" src={portfolio_app} alt="Portfolio Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                    </div>

                </div>
            </div>
            <PopupboxContainer  />
            
        </div>

    )
}

export default Portfolio;