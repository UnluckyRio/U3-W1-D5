// Componente Gallery: mostra una galleria di film per una saga specifica
import React, { useEffect, useState } from "react";
import { Spinner, Alert, Row, Col, Card } from "react-bootstrap";

const Gallery = ({ saga }) => {
  // Stato per film, caricamento ed errori
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Effettua il fetch dei dati dalla OMDb API
    fetch(
      `http://www.omdbapi.com/?apikey=33c8da27&s=${encodeURIComponent(saga)}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
          setError(null);
        } else {
          setError("Nessun film trovato.");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Errore nel caricamento dei dati.");
        setLoading(false);
      });
  }, [saga]);

  if (loading) return <Spinner animation="border" />; // Loader
  if (error) return <Alert variant="danger">{error}</Alert>; // Messaggio di errore

  return (
    <div className="mb-4">
      {/* Titolo della saga */}
      <h4>{saga}</h4>
      <Row>
        {/* Ciclo sui film trovati */}
        {movies.map((movie) => (
          <Col
            key={movie.imdbID}
            xs={6}
            md={4}
            lg={2}
            className="mb-2 text-center px-1"
          >
            <Card>
              {/* Controllo che movie.Poster sia una stringa valida, altrimenti mostro un placeholder */}
              <Card.Img
                variant="top"
                src={
                  typeof movie.Poster === "string" && movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x445?text=No+Image"
                }
                alt={movie.Title}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "1em" }}>
                  {movie.Title}
                </Card.Title>
                <Card.Text>{movie.Year}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Gallery;
