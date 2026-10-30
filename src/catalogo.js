import React from 'react';

function Catalogo() {
  const productos = [
    { id: 1, nombre: 'Camiseta Oversize Básica', precio: '$60.000 COP', img: 'https://www.gef.co/cdn/shop/files/LOMBARDO_900-FRENTE.jpg?v=1788813795' },
    { id: 2, nombre: 'Chaqueta Urban Street', precio: '$150.000 COP', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=80' },
  ];

  return (
    <div className="section-page">
      <h2>Catálogo de Productos</h2>
      <div className="grid-cards">
        {productos.map(p => (
          <div key={p.id} className="card">
            <img src={p.img} alt={p.nombre} />
            <div className="card-info">
              <h3>{p.nombre}</h3>
              <p className="price">{p.precio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;