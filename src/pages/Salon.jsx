function Salon() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="hero-base" style={{ minHeight: '50vh', background: 'var(--color-bg)' }}>
        <div className="hero-content reveal">
          <span className="subtitle-caps">El Recinto</span>
          <h1 className="title-massive" style={{ color: 'var(--color-text)' }}>
            Nuestras Instalaciones
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-vivre">
            <div className="grid-vivre-item reveal">
              <div className="grid-vivre-img-container">
                <div className="img-wrap">
                  <img 
                    src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                    alt="Instalaciones del salón" 
                    className="grid-vivre-img" 
                  />
                </div>
              </div>
              <div style={{ padding: '0 2rem' }}>
                <span className="subtitle-caps">Instalaciones</span>
                <h3 className="title-massive" style={{ marginBottom: '1rem', fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>Magia en cada rincón</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.125rem' }}>
                  En Salón Fantasy contamos con espacios amplios, ventilados y diseñados especialmente para brindar 
                  la máxima seguridad y diversión. Nuestra área de juegos infantiles está equipada con las mejores 
                  atracciones, mientras que la zona de adultos ofrece comodidad y elegancia.
                </p>
                <ul className="list-luxury" style={{ marginTop: '2rem', padding: 0 }}>
                  <li style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>Capacidad para hasta 200 invitados</li>
                  <li style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>Área de juegos infantiles multinivel</li>
                  <li style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>Estacionamiento seguro</li>
                  <li style={{ padding: '1rem 0' }}>Pista de baile iluminada</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Render Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
            <span className="subtitle-caps">Interactivo</span>
            <h2 className="title-massive" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>Visualiza tu Evento</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '1rem auto 0' }}>
              Usa el cursor para explorar la distribución de las mesas, la pista de baile interactiva y personalizar los colores en nuestro entorno 3D.
            </p>
          </div>
          <div className="reveal" style={{ overflow: 'hidden', height: '600px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0,0,0,0.1)' }}>
            <iframe 
              src="/salon3d.html" 
              width="100%" 
              height="100%" 
              style={{ border: 'none' }}
              title="Renderizado 3D del Salón Fantasy"
            />
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="section">
        <div className="container text-center reveal">
          <span className="subtitle-caps">Ubicación</span>
          <h2 className="title-massive" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', marginBottom: '1rem' }}>Encuéntranos</h2>
          <p style={{ marginBottom: '4rem', color: 'var(--color-text-muted)', fontSize: '1.125rem' }}>Fácilmente accesible en el corazón de Cd. Nezahualcóyotl.</p>
          <div style={{ height: '400px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.1)' }}>
            <iframe 
              src="https://maps.google.com/maps?q=Fantasy%20Sal%C3%B3n%20de%20Fiestas%20Infantiles,%20Ciudad%20Nezahualc%C3%B3yotl&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Salon;
