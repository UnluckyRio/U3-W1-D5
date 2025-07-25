import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';

const Settings = () => {
  // Stati per le varie impostazioni
  const [settings, setSettings] = useState({
    videoQuality: 'auto',
    downloadQuality: 'high',
    autoplay: true,
    notifications: true,
    language: 'it',
    subtitlesLanguage: 'it',
    subtitlesSize: 'medium',
    dataUsage: 'auto'
  });

  // Gestione del cambio delle impostazioni
  const handleSettingChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  // Gestione del salvataggio delle impostazioni
  const handleSave = (e) => {
    e.preventDefault();
    // Qui andrebbe implementata la logica per salvare le impostazioni
    alert('Impostazioni salvate con successo!');
  };

  return (
    <Container className="py-5">
      <h1 className="text-light mb-4">Impostazioni</h1>

      <Form onSubmit={handleSave}>
        {/* Impostazioni Video */}
        <Card bg="dark" text="light" className="mb-4">
          <Card.Header as="h5">Impostazioni Video</Card.Header>
          <Card.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Qualità di riproduzione</Form.Label>
                  <Form.Select
                    value={settings.videoQuality}
                    onChange={(e) => handleSettingChange('videoQuality', e.target.value)}
                  >
                    <option value="auto">Auto</option>
                    <option value="low">Bassa</option>
                    <option value="medium">Media</option>
                    <option value="high">Alta</option>
                    <option value="ultra">Ultra HD</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Qualità download</Form.Label>
                  <Form.Select
                    value={settings.downloadQuality}
                    onChange={(e) => handleSettingChange('downloadQuality', e.target.value)}
                  >
                    <option value="low">Bassa</option>
                    <option value="medium">Media</option>
                    <option value="high">Alta</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Impostazioni Riproduzione */}
        <Card bg="dark" text="light" className="mb-4">
          <Card.Header as="h5">Impostazioni Riproduzione</Card.Header>
          <Card.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="switch"
                    id="autoplay-switch"
                    label="Autoplay episodi successivi"
                    checked={settings.autoplay}
                    onChange={(e) => handleSettingChange('autoplay', e.target.checked)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="switch"
                    id="notifications-switch"
                    label="Notifiche nuovi contenuti"
                    checked={settings.notifications}
                    onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Impostazioni Lingua e Sottotitoli */}
        <Card bg="dark" text="light" className="mb-4">
          <Card.Header as="h5">Lingua e Sottotitoli</Card.Header>
          <Card.Body>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Lingua interfaccia</Form.Label>
                  <Form.Select
                    value={settings.language}
                    onChange={(e) => handleSettingChange('language', e.target.value)}
                  >
                    <option value="it">Italiano</option>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Lingua sottotitoli</Form.Label>
                  <Form.Select
                    value={settings.subtitlesLanguage}
                    onChange={(e) => handleSettingChange('subtitlesLanguage', e.target.value)}
                  >
                    <option value="it">Italiano</option>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Dimensione sottotitoli</Form.Label>
                  <Form.Select
                    value={settings.subtitlesSize}
                    onChange={(e) => handleSettingChange('subtitlesSize', e.target.value)}
                  >
                    <option value="small">Piccola</option>
                    <option value="medium">Media</option>
                    <option value="large">Grande</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Pulsanti di azione */}
        <div className="d-flex justify-content-end gap-3">
          <Button variant="secondary" type="reset">
            Ripristina Default
          </Button>
          <Button variant="danger" type="submit">
            Salva Impostazioni
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Settings;