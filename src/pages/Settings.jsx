// Pagina Settings: mostra le impostazioni dell'utente
import React from "react";
import { Card, Row, Col, Form } from "react-bootstrap";

const Settings = () => {
  return (
    <div className="container mt-5">
      {/* Card con impostazioni stile Netflix */}
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="bg-dark text-light border-secondary shadow">
            <Card.Body>
              <Card.Title>Impostazioni account</Card.Title>
              <hr style={{ borderColor: "#838383" }} />
              <Form>
                <Form.Group className="mb-3" controlId="setting1">
                  <Form.Check
                    type="switch"
                    label="Abilita notifiche"
                    defaultChecked
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="setting2">
                  <Form.Check type="switch" label="Modalità bambini" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="setting3">
                  <Form.Check
                    type="switch"
                    label="Riproduzione automatica trailer"
                    defaultChecked
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Settings;
