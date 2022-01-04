import React, {Fragment} from "react";
// react-icons
import {AiOutlineMail} from "react-icons/ai";
import {FiFacebook, FiInstagram} from "react-icons/fi";
// framer motion custom styles
import "./Footer.scss"

export default function FooterNav() {
    return (
        <Fragment>
            <div className="footer-container">
                <div className="footer-wrapper">
                    <div className="footer-one">
                        <p className="footer-one-text">Let's Connect</p>
                        <div className="footer-social-icons">
                            <div>
                                <a href="https://www.instagram.com/circulateappsa/">
                                    <FiInstagram color="#d6d6d7" size={25}/>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.facebook.com/circulateappsa/">
                                    <FiFacebook color="#d6d6d7" size={25}/>
                                </a>
                            </div>
                            <div>
                                <a href="mailto:circulatetheapp@gmail.com?subject=Circulate the app">
                                    <AiOutlineMail color="#d6d6d7" size={25}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-two">
                        <p className="footer-two-text">Terms</p>
                        <p className="footer-two-text">Legal</p>
                        <p className="footer-two-text">FAQ's</p>
                    </div>
                    <div className="footer-three">
                        <a href="#hero" className="footer-three-text">
                            <img
                                src={require("../assets/circulate.png")}
                                alt="footerLogo"
                                width={100}
                                height={100}/>
                        </a>
                    </div>
                    <div className="footer-four">
                        <div>
                            <p className="footer-four-text">
                                Design & Development by

                                <a href="https://www.j12designs.com">J12 Designs</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
