import React from 'react';

function Menu({ cambiarSeccion, seccionActiva }) {
  return (
    <header className="navbar-header">
      <div className="logo-marca" onClick={() => cambiarSeccion('inicio')} style={{ cursor: 'pointer' }}>
        Franco<span>Clothing</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li className={seccionActiva === 'inicio' ? 'active' : ''}>
            <button onClick={() => cambiarSeccion('inicio')}>Inicio</button>
          </li>
          <li className={seccionActiva === 'catalogo' ? 'active' : ''}>
            <button onClick={() => cambiarSeccion('catalogo')}>Catálogo</button>
          </li>
          <li className={seccionActiva === 'coleccion' ? 'active' : ''}>
            <button onClick={() => cambiarSeccion('coleccion')}>Colección</button>
          </li>
          <li className={seccionActiva === 'contacto' ? 'active' : ''}>
            <button onClick={() => cambiarSeccion('contacto')}>Contacto</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;