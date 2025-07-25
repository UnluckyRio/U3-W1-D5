// Pagina Home: mostra le 3 gallerie principali
import React from "react";
import Gallery from "../Gallery";

const Home = () => {
  return (
    <div className="container-fluid px-4">
      {/* Galleria Harry Potter */}
      <Gallery saga="Harry Potter" />
      {/* Galleria Il Signore degli Anelli */}
      <Gallery saga="Lord of the Rings" />
      {/* Galleria Star Wars */}
      <Gallery saga="Star Wars" />
    </div>
  );
};

export default Home;
