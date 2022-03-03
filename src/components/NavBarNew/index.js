import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavbarNew({ setShowHome }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowHome(true);
          }}
        >
          <b>//DEWA SUTTON</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                setShowHome(false);
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
