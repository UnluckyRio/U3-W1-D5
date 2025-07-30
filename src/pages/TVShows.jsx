import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import MovieGallery from '../components/MovieGallery';

const TVShows = () => {
  // Stati per gestire i dati delle serie TV e il caricamento
  const [gameOfThronesShows, setGameOfThronesShows] = useState([]);
  const [breakingBadShows, setBreakingBadShows] = useState([]);
  const [strangersThingsShows, setStrangersThingsShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Funzione per effettuare le chiamate API per le serie TV
  const fetchTVShows = async (searchQuery, setShows) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=33c8da27&s=${searchQuery}&type=series`);
      const data = await response.json();
      
      if (data.Response === 'True') {
        setShows(data.Search);
      } else {
        throw new Error(data.Error);
      }
    } catch (err) {
      setError(`Errore nel caricamento delle serie TV: ${err.message}`);
    }
  };

  useEffect(() => {
    const loadAllTVShows = async () => {
      setIsLoading(true);
      try {
        // Carico in parallelo tutte le serie TV
        await Promise.all([
          fetchTVShows('Game of Thrones', setGameOfThronesShows),
          fetchTVShows('Breaking Bad', setBreakingBadShows),
          fetchTVShows('Stranger Things', setStrangersThingsShows)
        ]);
      } catch (err) {
        setError(`Errore nel caricamento delle serie TV: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadAllTVShows();
  }, []); // Eseguo il fetch al montaggio del componente

  // Mostro lo spinner durante il caricamento
  if (isLoading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <Spinner animation="border" variant="danger" />
        <span className="ms-3 text-light">Caricamento serie TV...</span>
      </Container>
    );
  }

  // Mostro l'errore se presente
  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container fluid className="bg-dark text-light py-4">
      <Row>
        <Col>
          <h1 className="text-center mb-5">Serie TV</h1>
          
          {/* Galleria Game of Thrones */}
          {gameOfThronesShows.length > 0 && (
            <div className="mb-5">
              <MovieGallery title="Game of Thrones" movies={gameOfThronesShows} />
            </div>
          )}
          
          {/* Galleria Breaking Bad */}
          {breakingBadShows.length > 0 && (
            <div className="mb-5">
              <MovieGallery title="Breaking Bad" movies={breakingBadShows} />
            </div>
          )}
          
          {/* Galleria Stranger Things */}
          {strangersThingsShows.length > 0 && (
            <div className="mb-5">
              <MovieGallery title="Stranger Things" movies={strangersThingsShows} />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TVShows;