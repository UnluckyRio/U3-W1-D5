// Importo i moduli React e react-router-dom per la navigazione
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Importo i componenti principali
import NavbarNetflix from "./NavbarNetflix";
import FooterNetflix from "./FooterNetflix";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import TVShows from "./pages/TVShows";
import MovieDetails from "./pages/MovieDetails";

// Componente principale dell'applicazione
const App = () => {
  return (
    // Router gestisce la navigazione tra le pagine
    <Router>
      {/* Navbar visibile su tutte le pagine */}
      <NavbarNetflix />
      {/* Definisco le rotte principali dell'app */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      {/* Footer visibile su tutte le pagine */}
      <FooterNetflix />
    </Router>
  );
};

export default App;
