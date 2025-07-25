import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";

// Componente Navbar personalizzato per Netflix
const NavbarNetflix = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="netflix-navbar">
      <Container fluid>
        {/* Logo Netflix */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="/src/assets/logo.png"
            alt="Netflix Logo"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Menu di navigazione principale */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/tv-shows">
              Serie TV
            </Nav.Link>
            <Nav.Link as={Link} to="/movies">
              Film
            </Nav.Link>
            <Nav.Link as={Link} to="/new">
              Nuovi e popolari
            </Nav.Link>
          </Nav>

          {/* Menu utente */}
          <Nav>
            <Nav.Link as={Link} to="/account">
              Account
            </Nav.Link>
            <Nav.Link as={Link} to="/settings">
              Impostazioni
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarNetflix;
