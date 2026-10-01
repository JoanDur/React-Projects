/*
  ================================================================
  main.jsx — Punto de entrada de la aplicación
  ----------------------------------------------------------------
  Toma el <div id="root"> del index.html y le pide a React que
  renderice el componente <App /> allí.
  ================================================================
*/
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
