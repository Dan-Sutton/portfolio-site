import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navbar from "./navbar.module.css";

export default function NavbarNew({ setShowHome, setShowProjects }) {
  return (
    <Navbar
      className="navbar"
      bg="light"
      expand="lg"
    >
      <Container>
        <Navbar.Brand
          className={navbar.hvrgrow}
          style={{ cursor: "pointer" }}
          href="/"
        >
          <b>{"//DEWA SUTTON"}</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={navbar.hvrgrow} href="projects">
              Projects
            </Nav.Link>
            <Nav.Link className={navbar.hvrgrow} href="contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
