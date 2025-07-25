// Pagina Account: mostra informazioni sull'account utente
import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

const Account = () => {
  return (
    <div className="container mt-5">
      {/* Card con info account stile Netflix */}
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="bg-dark text-light border-secondary shadow">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <i
                  className="bi bi-person-circle"
                  style={{ fontSize: "2.5em", color: "#838383" }}
                ></i>
                <div className="ms-3">
                  <Card.Title className="mb-0">Valerio Rossi</Card.Title>
                  <Card.Text
                    className="mb-0"
                    style={{ fontSize: "0.9em", color: "#838383" }}
                  >
                    valerio.rossi@email.com
                  </Card.Text>
                </div>
              </div>
              <hr style={{ borderColor: "#838383" }} />
              <Row>
                <Col xs={6}>
                  <p className="mb-1 text-secondary">Abbonamento</p>
                  <p className="fw-bold">Premium</p>
                </Col>
                <Col xs={6}>
                  <p className="mb-1 text-secondary">Scadenza</p>
                  <p className="fw-bold">31/12/2024</p>
                </Col>
              </Row>
              <Button variant="outline-light" className="rounded-0 mt-3 w-100">
                Gestisci abbonamento
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Account;
