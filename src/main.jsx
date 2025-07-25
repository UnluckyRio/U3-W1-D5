// Importo React e ReactDOM per avviare l'applicazione
import React from "react";
import ReactDOM from "react-dom/client";
// Importo il file CSS principale dell'applicazione
import "./index.css";
// Importo il componente principale App
import App from "./App.jsx";
// Importo Bootstrap CSS per applicare gli stili di Bootstrap a tutta l'app
import "bootstrap/dist/css/bootstrap.min.css"; // Import globale di Bootstrap

// Creo il root React e renderizzo l'applicazione
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
