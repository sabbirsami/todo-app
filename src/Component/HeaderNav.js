import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const HeaderNav = () => {
    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="lg"
                className="background py-3"
                variant="dark"
            >
                <Container>
                    <Navbar.Brand href="#home">Hi Sami</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <small className="text-secondary my-auto">
                                If you want to save data please login{" "}
                                <BsArrowRightShort></BsArrowRightShort>{" "}
                            </small>
                            <Link to="/login" className="nav-link text-white">
                                Login
                            </Link>
                            <Link to="/login" className="nav-link text-white">
                                Sign Up
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderNav;
