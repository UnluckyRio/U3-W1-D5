import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

const Account = () => {
  // Dati di esempio dell'utente
  const userProfile = {
    name: 'Mario Rossi',
    email: 'mario.rossi@example.com',
    plan: 'Premium',
    nextBilling: '15/04/2024',
    preferences: {
      language: 'Italiano',
      autoplay: true,
      notifications: true,
      subtitles: true
    }
  };

  return (
    <Container className="py-5">
      <h1 className="text-light mb-4">Il mio Account</h1>
      
      <Row>
        {/* Informazioni Profilo */}
        <Col md={6} className="mb-4">
          <Card bg="dark" text="light">
            <Card.Header as="h5">Informazioni Profilo</Card.Header>
            <Card.Body>
              <Card.Title>{userProfile.name}</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item variant="dark">
                  Email: {userProfile.email}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Piano attuale: {userProfile.plan}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Prossimo addebito: {userProfile.nextBilling}
                </ListGroup.Item>
              </ListGroup>
              <Button variant="danger" className="mt-3">Modifica Profilo</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Preferenze Account */}
        <Col md={6} className="mb-4">
          <Card bg="dark" text="light">
            <Card.Header as="h5">Preferenze Account</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item variant="dark">
                  Lingua: {userProfile.preferences.language}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Autoplay: {userProfile.preferences.autoplay ? 'Attivo' : 'Disattivo'}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Notifiche: {userProfile.preferences.notifications ? 'Attive' : 'Disattive'}
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Sottotitoli: {userProfile.preferences.subtitles ? 'Attivi' : 'Disattivi'}
                </ListGroup.Item>
              </ListGroup>
              <Button variant="danger" className="mt-3">Modifica Preferenze</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Sezione Sicurezza */}
      <Row className="mt-4">
        <Col md={12}>
          <Card bg="dark" text="light">
            <Card.Header as="h5">Sicurezza</Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Button variant="outline-danger" className="w-100 mb-3">
                    Cambia Password
                  </Button>
                </Col>
                <Col md={6}>
                  <Button variant="outline-danger" className="w-100 mb-3">
                    Gestione Dispositivi
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;