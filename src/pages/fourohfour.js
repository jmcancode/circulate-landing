import React, {Fragment} from "react";
import "./fourohfour.scss";
// react-router
import {Link} from "react-router-dom";
import {FiInstagram, FiFacebook} from 'react-icons/fi'
import {AiOutlineMail} from "react-icons/ai"

export default function ErrorPage() {
    return (
        <Fragment>
            <div className="error-wrapper">
                <div className="error-inner-container">

                    <p className="error-four-oh-four text-uppercase">
                        💔 404 and heart breaks💔
                    </p>
                    <p className="error-small-text">It looks like we've gotten an error for your request.</p>
                    <p className="error-goback text-white">lets go
                        <Link
                            style={{
                            paddingLeft: '5px'
                        }}
                            to="/">back</Link>
                    </p>
                </div>
            </div>
            <div className="connect-wrapper">
                <div className="connect-content">
                    <a
                        href="https://www.facebook.com/circulateappsa/"
                        target="__blank"
                        rel="noopener noreferrer">
                        <FiFacebook color="#d6d6d7" size={25}/>
                    </a>
                    <a
                        href="https://www.instagram.com/circulateappsa/"
                        target="__blank"
                        rel="noopener noreferrer">
                        <FiInstagram color="#d6d6d7" size={25}/>
                    </a>
                    <a href="mailto:circulatetheapp@gmail.com?subject=Circulate Inquiry">
                        <AiOutlineMail color="#d6d6d7" size={25}/>
                    </a>
                </div>
            </div>
        </Fragment>
    );
}
