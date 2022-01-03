import React, {useState} from 'react'
// react-bootstrap ui
import {Container, Navbar, Nav} from 'react-bootstrap'
// custom styles 
import "./MainNavigation.scss"


function MainNavi() {
    const [navBar,
        setNavBar] = useState(false);

    const changeBackground = () => {
        if (window.scroll >= 50) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <Navbar
        className={navBar
            ? 'main-navigation active'
            : 'main-navigation'}
            fixed="top"
            collapseOnSelect
            expand="lg"
            variant="dark">
            <Container>
                <Navbar.Brand
                    href="#hero"
                    className="text-uppercase"
                    style={{
                    fontWeight: 'bold',
                    letterSpacing: "1.2px"
                }}>Circulate</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto"></Nav>
                    <Nav>
                        <Nav.Link href="#about">about</Nav.Link>
                        <Nav.Link href="#press">press</Nav.Link>
                        <Nav.Link href="#services">services</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainNavi
