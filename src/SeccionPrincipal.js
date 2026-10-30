import React, { useState } from "react";
import "./App.css";

function SeccionPrincipal() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <main className="seccion-principal">
      <h1>Estilo que define tu personalidad</h1>
      <p>Descubre las últimas tendencias de la temporada con nuestra nueva colección exclusiva.</p>

      <img 
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80" 
        alt="Tienda de ropa moderna" 
        className="imagen-destacada"
      />

      <br />
      <button className="boton-accion" onClick={() => setMostrarMensaje(!mostrarMensaje)}>
        {mostrarMensaje ? "Ocultar sorpresa" : "Descubrir sorpresa"}
      </button>

      {mostrarMensaje && (
        <p className="mensaje-sorpresa">¡Felicidades! Tienes un 20% de descuento en tu primera compra usando el código VOGUE20.</p>
      )}
    </main>
  );
}

export default SeccionPrincipal;