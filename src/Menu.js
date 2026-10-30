import React from "react";
import "./App.css";

function Menu() {
  return (
    <nav className="menu-navegacion">
      <h2 className="logo">UrbanChic</h2>
      <ul>
        <li>Inicio</li>
        <li>Catálogo</li>
        <li>Colección</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}

export default Menu;