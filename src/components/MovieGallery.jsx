import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MovieGallery = ({ title, movies }) => {
  const navigate = useNavigate();

  // Funzione per navigare ai dettagli del film
  const handleMovieClick = (movieId) => {
    navigate(`/movie-details/${movieId}`);
  };

  return (
    <div className="movie-gallery">
      <h2 className="text-light mb-4">{title}</h2>
      <Row className="g-4">
        {movies.map((movie) => (
          <Col key={movie.imdbID} xs={12} sm={6} md={4} lg={3} xl={2}>
            <div 
              className="position-relative movie-card" 
              onClick={() => handleMovieClick(movie.imdbID)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x450"
                }
                alt={movie.Title}
                className="w-100 rounded movie-poster"
              />
              <div className="movie-info position-absolute bottom-0 start-0 w-100 p-2 text-white bg-dark bg-opacity-75 rounded-bottom">
                <h6 className="mb-1 text-truncate">{movie.Title}</h6>
                <small className="text-muted">{movie.Year}</small>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MovieGallery;
