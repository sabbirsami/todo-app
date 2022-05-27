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
                className="background py-3 fixed-top"
                variant="dark"
            >
                <Container>
                    <Link to="/" className="fs-4 text-light nav-link">
                        Hi Sami
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <small className="text-secondary my-auto animated_text">
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
