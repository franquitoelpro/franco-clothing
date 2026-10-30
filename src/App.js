import React, { useState } from 'react';
import './App.css';
import Menu from './Menu';
import SeccionPrincipal from './SeccionPrincipal';
import Footer from './Footer';

function App() {
  // Inicializamos la vista en 'inicio' para que abra la portada principal
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  return (
    <div className="App">
      <Menu cambiarSeccion={setSeccionActiva} seccionActiva={seccionActiva} />
      <SeccionPrincipal seccionActiva={seccionActiva} cambiarSeccion={setSeccionActiva} />
      <Footer />
    </div>
  );
}

export default App;