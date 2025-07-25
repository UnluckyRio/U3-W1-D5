// Componente NavbarNetflix: rappresenta la barra di navigazione principale
import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importo Link per la navigazione
// Importo il logo come modulo, così React lo gestisce correttamente
import logo from "./assets/logo.png";

const NavbarNetflix = () => {
  return (
    // Navbar di Bootstrap con tema scuro
    <Navbar
      bg="dark"
      expand="lg"
      data-bs-theme="dark"
      style={{ backgroundColor: "#221f1f" }}
    >
      <Container fluid>
        {/* Logo Netflix */}
        <Navbar.Brand as={Link} to="/">
          {/* Logo Netflix importato come modulo, necessario per React/Vite */}
          <img
            src={logo} // Uso la variabile logo che contiene il path corretto
            alt="Logo"
            style={{ width: "100px", height: "55px" }}
          />
        </Navbar.Brand>
        {/* Bottone per il menu mobile */}
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          {/* Link di navigazione */}
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link as={Link} to="/" className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/account" className="fw-bold">
              Account
            </Nav.Link>
            <Nav.Link as={Link} to="/settings" className="fw-bold">
              Settings
            </Nav.Link>
            {/* Voci statiche come TV Shows, Movies, ecc. */}
            <Nav.Link href="#" className="fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
          {/* Icone e sezione KIDS */}
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons"></i>
            <div
              id="kids"
              className="fw-bold"
              style={{ color: "#f5f5f1", fontSize: "0.8em" }}
            >
              KIDS
            </div>
            <i className="bi bi-bell icons"></i>
            <i className="bi bi-person-circle icons"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarNetflix;
