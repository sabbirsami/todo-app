import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderNav = () => {
    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="lg"
                className="background"
                variant="dark"
            >
                <Container>
                    <Navbar.Brand href="#home">Hi Sami</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/login">Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderNav;
