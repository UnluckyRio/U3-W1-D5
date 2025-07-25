import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import MovieGallery from '../components/MovieGallery';

const Home = () => {
  // Stati per gestire i dati dei film e il caricamento
  const [harryPotterMovies, setHarryPotterMovies] = useState([]);
  const [lordOfTheRingsMovies, setLordOfTheRingsMovies] = useState([]);
  const [starWarsMovies, setStarWarsMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Funzione per effettuare le chiamate API
  const fetchMovies = async (searchQuery, setMovies) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=33c8da27&s=${searchQuery}`);
      const data = await response.json();
      
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        throw new Error(data.Error);
      }
    } catch (err) {
      setError(`Errore nel caricamento dei film: ${err.message}`);
    }
  };

  useEffect(() => {
    const loadAllMovies = async () => {
      setIsLoading(true);
      try {
        // Carico in parallelo tutte le saghe di film
        await Promise.all([
          fetchMovies('Harry Potter', setHarryPotterMovies),
          fetchMovies('Lord of the Rings', setLordOfTheRingsMovies),
          fetchMovies('Star Wars', setStarWarsMovies)
        ]);
      } catch (err) {
        setError(`Errore nel caricamento dei film: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadAllMovies();
  }, []); // Eseguo il fetch al montaggio del componente

  // Mostro lo spinner durante il caricamento
  if (isLoading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <Spinner animation="border" role="status" variant="danger">
          <span className="visually-hidden">Caricamento...</span>
        </Spinner>
      </Container>
    );
  }

  // Mostro eventuali errori
  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container fluid className="px-4">
      <Row className="mt-5">
        <Col>
          <MovieGallery title="Harry Potter Saga" movies={harryPotterMovies} />
        </Col>
      </Row>
      
      <Row className="mt-5">
        <Col>
          <MovieGallery title="Il Signore degli Anelli" movies={lordOfTheRingsMovies} />
        </Col>
      </Row>
      
      <Row className="mt-5">
        <Col>
          <MovieGallery title="Star Wars Saga" movies={starWarsMovies} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;