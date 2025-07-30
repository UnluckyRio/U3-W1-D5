import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Spinner, Alert, Badge } from 'react-bootstrap';

const MovieDetails = () => {
  // Ottengo l'ID del film dall'URL
  const { movieId } = useParams();
  
  // Stati per gestire i dati del film, commenti e caricamento
  const [movieDetails, setMovieDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Funzione per recuperare i dettagli del film da OMDB API
  const fetchMovieDetails = async (id) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=33c8da27&i=${id}&plot=full`);
      const data = await response.json();
      
      if (data.Response === 'True') {
        setMovieDetails(data);
      } else {
        throw new Error(data.Error || 'Film non trovato');
      }
    } catch (err) {
      setError(`Errore nel caricamento dei dettagli: ${err.message}`);
    }
  };

  // Funzione per recuperare i commenti dalle API interne
  const fetchComments = async (id) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MWVkMjhhZDEyOTAwMTU4NzZiZDQiLCJpYXQiOjE3MzE2NjI1NDYsImV4cCI6MTczMjg3MjE0Nn0.M2VmZjM4ZjQtZjQwYi00ZjQwLWI0ZjQtZjQwYjRmNDBiNGY0'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        console.warn('Nessun commento trovato per questo film');
        setComments([]);
      }
    } catch (err) {
      console.warn('Errore nel caricamento dei commenti:', err.message);
      setComments([]);
    }
  };

  useEffect(() => {
    const loadMovieData = async () => {
      if (!movieId) {
        setError('ID film non valido');
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);
      
      try {
        // Carico in parallelo dettagli del film e commenti
        await Promise.all([
          fetchMovieDetails(movieId),
          fetchComments(movieId)
        ]);
      } catch (err) {
        setError(`Errore nel caricamento dei dati: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadMovieData();
  }, [movieId]); // Ricarico quando cambia l'ID del film

  // Mostro lo spinner durante il caricamento
  if (isLoading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <Spinner animation="border" variant="danger" />
        <span className="ms-3 text-light">Caricamento dettagli...</span>
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

  // Mostro messaggio se non ci sono dettagli
  if (!movieDetails) {
    return (
      <Container className="mt-4">
        <Alert variant="warning">
          Dettagli del film non disponibili.
        </Alert>
      </Container>
    );
  }

  return (
    <Container fluid className="bg-dark text-light py-4">
      <Row>
        <Col lg={4}>
          {/* Poster del film */}
          <Card className="bg-secondary border-0">
            <Card.Img 
              variant="top" 
              src={movieDetails.Poster !== 'N/A' ? movieDetails.Poster : 'https://via.placeholder.com/400x600'}
              alt={movieDetails.Title}
              style={{ height: '600px', objectFit: 'cover' }}
            />
          </Card>
        </Col>
        
        <Col lg={8}>
          {/* Dettagli del film */}
          <div className="ps-lg-4">
            <h1 className="mb-3">{movieDetails.Title}</h1>
            
            <div className="mb-3">
              <Badge bg="danger" className="me-2">{movieDetails.Year}</Badge>
              <Badge bg="secondary" className="me-2">{movieDetails.Rated}</Badge>
              <Badge bg="info" className="me-2">{movieDetails.Runtime}</Badge>
              {movieDetails.Type && (
                <Badge bg="success">{movieDetails.Type === 'movie' ? 'Film' : 'Serie TV'}</Badge>
              )}
            </div>
            
            <Row className="mb-4">
              <Col sm={6}>
                <strong>Genere:</strong> {movieDetails.Genre}
              </Col>
              <Col sm={6}>
                <strong>Regista:</strong> {movieDetails.Director}
              </Col>
              <Col sm={6}>
                <strong>Attori:</strong> {movieDetails.Actors}
              </Col>
              <Col sm={6}>
                <strong>Paese:</strong> {movieDetails.Country}
              </Col>
              {movieDetails.imdbRating && (
                <Col sm={6}>
                  <strong>Valutazione IMDB:</strong> {movieDetails.imdbRating}/10
                </Col>
              )}
            </Row>
            
            <div className="mb-4">
              <h4>Trama</h4>
              <p className="text-muted">{movieDetails.Plot}</p>
            </div>
            
            {/* Sezione commenti */}
            <div>
              <h4 className="mb-3">Commenti ({comments.length})</h4>
              {comments.length > 0 ? (
                <div className="comments-section">
                  {comments.map((comment, index) => (
                    <Card key={index} className="bg-secondary border-0 mb-3">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <strong className="text-light">{comment.author || 'Utente Anonimo'}</strong>
                          <div>
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={i < (comment.rate || 0) ? 'text-warning' : 'text-muted'}>
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-light mb-0">{comment.comment}</p>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              ) : (
                <Alert variant="info">
                  Nessun commento disponibile per questo titolo.
                </Alert>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;