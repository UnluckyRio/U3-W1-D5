import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  // Determino il placeholder in base alla pagina corrente
  const getPlaceholder = () => {
    if (location.pathname === '/tv-shows') {
      return 'Cerca Serie TV...';
    }
    return 'Cerca Film...';
  };

  // Gestisco la ricerca
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() && onSearch) {
      onSearch(searchTerm.trim());
    }
  };

  // Gestisco il cambiamento del testo
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Gestisco l'invio con Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <Form onSubmit={handleSearch} className="d-flex">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder={getPlaceholder()}
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="search-input"
          style={{
            backgroundColor: '#212529',
            borderColor: '#373b3e',
            color: '#ffffff'
          }}
        />
        <Button 
          variant="outline-danger" 
          type="submit"
          disabled={!searchTerm.trim()}
        >
          🔍
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;