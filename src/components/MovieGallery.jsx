import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const MovieGallery = ({ title, movies }) => {
  return (
    <div className="movie-gallery">
      <h2 className="text-light mb-4">{title}</h2>
      <Row className="g-4">
        {movies.map((movie) => (
          <Col key={movie.imdbID} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card className="h-100 bg-dark text-light movie-card">
              <Card.Img
                variant="top"
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'}
                alt={movie.Title}
                className="movie-poster"
              />
              <Card.Body>
                <Card.Title className="text-truncate">{movie.Title}</Card.Title>
                <Card.Text className="text-muted">{movie.Year}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MovieGallery;