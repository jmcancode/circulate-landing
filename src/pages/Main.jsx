import React, {Fragment, useState} from 'react'
// react-bootstrap ui
import {Tab, TabContainer, Tabs} from 'react-bootstrap'
// react-icons
import {AiOutlineArrowDown} from 'react-icons/ai'
//components
import MainNavi from "../components/MainNavi"
import FooterNav from "../components/nav"
// custom styles
import "./Main.scss"
// firebase
import {db} from "../firebase/config"

function MainPage() {
    const [fullName,
        setFullName] = useState("");
    const [email,
        setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db
            .collection("subscribers")
            .add({fullName: fullName, email: email})
            .then(() => {
                alert("Thank you for joining the Circulate community! We look forward to updating you o" +
                        "n the launch of our new web application");
            })
            .catch((err) => {
                alert(err.message);
            });

        setFullName("");
        setEmail("");
    };

    return (
        <Fragment>
            <MainNavi/>
            <div id="main-wrapper">
                <section id="hero" className="hero-container">
                    <div className="hero-content">

                        <p className="text-white connecting-text">
                            Connecting the greater San Antonio area with minority owned businesses.
                        </p>
                        <p className="coming-soon-text">Coming Soon!</p>
                        <form
                            onSubmit={handleSubmit}
                            style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: "100%"
                        }}>
                            <input
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder='full name'
                                aria-label="Email"
                                type="name"
                                required="true"
                                className="mb-2"/>
                            <input
                                placeholder='email@address.com'
                                aria-label="Email"
                                type="email"
                                required="true"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                            
                                <button className="btn btn-secondary mt-3" type="submit" variant="secondary">submit</button>
                            
                            <small className="notify-me-text">Notify me when the app launches</small>
                        </form>
                        <div className="scroll-content">
                            <small className="scroll-text">
                                <a href="#about">
                                    <AiOutlineArrowDown size={54} color="white"/>
                                </a>
                            </small>
                        </div>
                    </div>
                </section>
                <section id="about" className="about-container">
                    <div className="about-content">
                        <div className="about-text-wrapper">
                            <p className="about-text">
                                Circulate, LLC was born from a need to find and support local minority owned
                                businesses.
                                <br/>
                                <br/>
                                San Antonio's current lists are either outdated or have little to no customer
                                support.
                                <br/>
                                <br/>
                                Our mission is to give growing minority business owners a platform that can help
                                expand their virtual presence and connect San Antonians to great local
                                businesses.
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <a className="our-services-btn-left" href="#press">Learn More</a>
                                <a className="our-services-btn-right" href="#services">Services</a>
                            </p>
                        </div>
                        <div className="about-image-container">
                            <img
                                src={require("../assets/circulate.png")}
                                alt="aboutImage"
                                width={100}
                                height={100}/>
                        </div>
                    </div>
                </section>
                <section id="press" className="press-container">
                    <div className="press-content">
                        <div className="pressNmedia">
                            <p>Press& Media</p>

                        </div>
                        <div id="#companyInfo" className="press-company-info-container">
                            <p className="press-company-info">Company Info</p>
                        </div>
                        <div id="#pressRelease" className="press-release-container">
                            <p className="press-release">Press Release</p>
                        </div>
                        <div id="#brandAssests" className="press-company-brand-assets-container">
                            <p className="press-brand-assets">Brand Assets</p>
                        </div>
                        <div className="press-down-button">
                            <a href="#services" className="press-what-we-offer">
                                <AiOutlineArrowDown size={40} color="white"/>
                            </a>
                        </div>
                    </div>
                </section>
                <section id="services" className="services-container">
                    <div className="services-content">
                        <div className="services-our-services-text">
                            <p>Our Services</p>
                        </div>
                        <div className="services-listing">
                            <p>Listings</p>
                        </div>
                        <div className="services-events">
                            <p>Events</p>
                        </div>
                        <div className="services-newsletters">
                            <p>Newsletters</p>
                        </div>
                    </div>
                </section>
            </div>
            <FooterNav/>
        </Fragment>
    )
}

export default MainPage
