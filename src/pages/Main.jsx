import React, {Fragment, useState} from 'react'
// react-icons
import {AiOutlineArrowDown} from 'react-icons/ai'
//components
import MainNavi from "../components/MainNavi"
import FooterNav from "../components/nav"
// custom styles
import "./Main.scss"
// firebase
import {db} from "../firebase/config"
import {Button} from 'react-bootstrap'

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
            <div id="main-wrapper" className="main-wrapper">
                <section id="hero" className="hero-container">
                    <div className="hero-content">

                        <p className="text-white connecting-text">
                            Connecting the greater San Antonio area with black & minority owned businesses.
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
                                required
                                className="mb-2"/>
                            <input
                                placeholder='email@address.com'
                                aria-label="Email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>

                            <button className="btn btn-secondary mt-3" type="submit" variant="secondary">submit</button>

                            <small className="notify-me-text">Notify me when the app launches</small>
                        </form>
                        <div className="scroll-content ">
                            <small>
                                <a href="#about" className="bounce-5">
                                    <AiOutlineArrowDown size={54} color="white"/>
                                </a>
                            </small>
                        </div>
                    </div>

                </section>
                <section id="about" className="about-container">
                    <div
                        className="about-content"
                        style={{
                        backgroundColor: "linearGradient(#777, #171717)"
                    }}>
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
                            </p>
                            <div className='our-service-btn-container'>
                                <a className="our-services-btn-left" href="#press">Brand</a>
                                <a className="our-services-btn-right" href="#services">Services</a>
                            </div>
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
                            <p className="press-media-text">Press&Media</p>
                        </div>
                        <div id="#companyInfo" className="press-company-info-container">
                            <p className="press-company-info">
                                <a href="GP_Pitch.pdf" download>
                                    Company Info
                                </a>
                            </p>
                        </div>
                        <div id="#pressRelease" className="press-release-container">
                            <p className="press-release">Press Release</p>
                        </div>
                        <div id="#brandAssests" className="press-company-brand-assets-container">
                            <p className="press-brand-assets">
                                <a href="brandassets.pdf" download>Brand Assets</a>
                            </p>
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
                            <p href="#hero">Our Services</p>
                            <small className="text-white comming-soon">Launching 2022</small>
                        </div>
                        <div style={{paddingTop: '4em'}}>
                            <Button style={{padding: '15px'}} small className="rounded-pill" variant="dark" href="#hero">Subscribe for updates</Button>
                        </div>
                    </div>
                </section>
            </div>
            <FooterNav/>
        </Fragment>
    )
}

export default MainPage
