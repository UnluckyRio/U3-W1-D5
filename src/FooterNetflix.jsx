import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

// Componente Footer personalizzato per Netflix
const FooterNetflix = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          {/* Prima colonna */}
          <Col md={3}>
            <h5>Netflix Italia</h5>
            <ul className="list-unstyled">
              <li>Centro assistenza</li>
              <li>Lavora con noi</li>
              <li>Note legali</li>
            </ul>
          </Col>
          
          {/* Seconda colonna */}
          <Col md={3}>
            <h5>Contenuti</h5>
            <ul className="list-unstyled">
              <li>Audio e sottotitoli</li>
              <li>Media Center</li>
              <li>Privacy</li>
            </ul>
          </Col>
          
          {/* Terza colonna */}
          <Col md={3}>
            <h5>Account</h5>
            <ul className="list-unstyled">
              <li>Il tuo account</li>
              <li>Impostazioni</li>
              <li>Assistenza dispositivi</li>
            </ul>
          </Col>
          
          {/* Quarta colonna */}
          <Col md={3}>
            <h5>Link utili</h5>
            <ul className="list-unstyled">
              <li>Gift Cards</li>
              <li>Area stampa</li>
              <li>Investor Relations</li>
            </ul>
          </Col>
        </Row>
        
        {/* Copyright */}
        <Row className="mt-4">
          <Col className="text-center">
            <p>© 2024 Netflix, Inc. Tutti i diritti riservati</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterNetflix;