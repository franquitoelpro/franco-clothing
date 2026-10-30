import React from 'react';

function Contacto() {
  return (
    <div className="section-page">
      <h2>Sección de Contacto</h2>
      <div className="contacto-container">
        <form className="contacto-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <textarea rows="4" placeholder="Tu mensaje" required></textarea>
          <button type="submit" className="btn-send">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;