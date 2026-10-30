import React, { useState } from 'react';

function SeccionPrincipal({ seccionActiva, cambiarSeccion }) {
  // Estado para mostrar u ocultar la sorpresa interactiva
  const [mostrarSorpresa, setMostrarSorpresa] = useState(false);

  // Datos del Catálogo de Ropa
  const productosCatalogo = [
    { id: 1, nombre: 'Camiseta Oversize Básica', precio: '$60.000 COP', img: 'https://www.gef.co/cdn/shop/files/LOMBARDO_900-FRENTE.jpg?v=1788813795' },
    { id: 2, nombre: 'Chaqueta Urban Street', precio: '$150.000 COP', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=80' },
    { id: 3, nombre: 'Pantalón Cargo Negro', precio: '$110.000 COP', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop&q=80' },
    { id: 4, nombre: 'Buzo Hoodie Essential', precio: '$95.000 COP', img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=80' },
  ];

  // Datos de la Colección Exclusiva
  const productosColeccion = [
    { id: 101, nombre: 'Hoodie Franco Limited', precio: '$180.000 COP', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwq9WxAGumgnvdR5NLICFVPdC1RVxATFmSzR9lE-gxfaxn08Po2HGEbNI&s=10' },
    { id: 102, nombre: 'Conjunto Urban Premium', precio: '$220.000 COP', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lfc2QToTu5zRqpFrg7McqfrLHgue3WAd1gsIY33klBpw7P94DL3fSuKy&s=10' },
    { id: 103, nombre: 'Estilo Urbano Completo', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHEvSzSVOY9Iej-rrjl6rfq2XC4B-LFUQYoR5w8ouTwPUc1-2TNsxwGTQ&s=10', precio: '$195.000 COP' },
  ];

  return (
    <main className="main-content">
      {/* 1. SECCIÓN INICIO */}
      {seccionActiva === 'inicio' && (
        <section className="retro-hero">
          <h1 className="neon-title">Vive la Era del Estilo Urbano con FrancoClothing</h1>
          <p className="retro-subtitle">Moda streetwear, prendas exclusivas y el mejor diseño de Medellín.</p>
          
          <div className="image-glow-container">
          
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ5Y8Yn9UQOahMlGK3DdJRs1o9-9z3ppDcPrAOxJe_4w&s" 
              alt="Logo FrancoClothing Estilo Urbano" 
              className="glow-img"
            />
          </div>

          <div className="sorpresa-container-center">
            <button 
              className="cheat-btn" 
              onClick={() => setMostrarSorpresa(!mostrarSorpresa)}
            >
              ➔ {mostrarSorpresa ? 'Ocultar sorpresa' : 'Descubrir sorpresa'}
            </button>

            {mostrarSorpresa && (
              <p className="texto-sorpresa-inline">
                ¡Sorpresa! Obtén un 20% de descuento en tu primera compra en ropa urbana en franco-clothing.
              </p>
            )}
          </div>
        </section>
      )}

      {/* 2. SECCIÓN CATÁLOGO */}
      {seccionActiva === 'catalogo' && (
        <section className="section-content">
          <h2 className="neon-title">Catálogo de Productos</h2>
          <div className="grid-cards">
            {productosCatalogo.map((prod) => (
              <div key={prod.id} className="card">
                <img src={prod.img} alt={prod.nombre} />
                <div className="card-info">
                  <h3>{prod.nombre}</h3>
                  <p className="price">{prod.precio}</p>
                  <button className="btn-buy" onClick={() => alert(`¡${prod.nombre} agregado al carrito!`)}>
                    Agregar al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. SECCIÓN COLECCIÓN */}
      {seccionActiva === 'coleccion' && (
        <section className="section-content">
          <h2 className="neon-title">Colección Exclusiva</h2>
          <div className="grid-cards">
            {productosColeccion.map((prod) => (
              <div key={prod.id} className="card">
                <img src={prod.img} alt={prod.nombre} />
                <div className="card-info">
                  <h3>{prod.nombre}</h3>
                  <p className="price">{prod.precio}</p>
                  <button className="btn-buy" onClick={() => alert(`Viendo detalles de ${prod.nombre}`)}>
                    Ver Detalle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. SECCIÓN CONTACTO */}
      {seccionActiva === 'contacto' && (
        <section className="section-content">
          <h2 className="neon-title">Contacto FrancoClothing</h2>
          <div className="contacto-container">
            <form className="contacto-form" onSubmit={(e) => { e.preventDefault(); alert('¡Mensaje enviado con éxito!'); }}>
              <div className="input-group">
                <label>Nombre completo</label>
                <input type="text" placeholder="Tu nombre" required />
              </div>
              <div className="input-group">
                <label>Correo Electrónico</label>
                <input type="email" placeholder="tu@email.com" required />
              </div>
              <div className="input-group">
                <label>Mensaje</label>
                <textarea rows="4" placeholder="¿En qué te podemos ayudar?" required></textarea>
              </div>
              <button type="submit" className="cheat-btn">Enviar Mensaje</button>
            </form>

            <div className="contacto-info">
              <h3>Información de la Tienda</h3>
              <p><strong>Ubicación:</strong> Medellín, Colombia</p>
              <p><strong>WhatsApp:</strong> +57 3245782527</p>
              <p> <strong>Email:</strong> contacto@francoclothing.com</p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default SeccionPrincipal;