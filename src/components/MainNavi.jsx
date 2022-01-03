import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
function MainNavi() {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#hero" className="text-uppercase" style={{fontWeight: 'bold', letterSpacing:"1.2px"}}>Circulate</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav  className="mx-auto"></Nav>
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
