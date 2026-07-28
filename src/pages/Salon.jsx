function Salon() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="hero-base" style={{ minHeight: '40vh', backgroundImage: "url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="hero-content">
          <h1 className="hero-title" style={{ fontSize: '3rem' }}>Nuestras Instalaciones</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ color: 'var(--color-primary)', fontSize: '2.5rem' }}>Magia en cada rincón</h2>
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                En Salón Fantasy contamos con espacios amplios, ventilados y diseñados especialmente para brindar 
                la máxima seguridad y diversión. Nuestra área de juegos infantiles está equipada con las mejores 
                atracciones, mientras que la zona de adultos ofrece comodidad y elegancia.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}>✅ Capacidad para hasta 200 invitados</li>
                <li style={{ marginBottom: '10px' }}>✅ Área de juegos infantiles multinivel</li>
                <li style={{ marginBottom: '10px' }}>✅ Estacionamiento seguro</li>
                <li style={{ marginBottom: '10px' }}>✅ Pista de baile iluminada</li>
              </ul>
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <div className="glass-panel" style={{ padding: '10px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Instalaciones del salón" 
                  style={{ borderRadius: 'var(--radius-md)', width: '100%', objectFit: 'cover' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Render Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Visualiza tu Evento en 3D</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)' }}>
              Usa el cursor para explorar la distribución de las mesas, la pista de baile interactiva y personalizar los colores.
            </p>
          </div>
          <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', height: '600px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
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
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container text-center">
          <h2>Ubicación</h2>
          <p style={{ marginBottom: '2rem' }}>Encuéntranos fácilmente en el corazón de Cd. Nezahualcóyotl.</p>
          <div className="glass-panel" style={{ padding: '10px', height: '400px' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m2!1s0x85d1fc102384a7e9%3A0x66c8f6e0766287c7!2sCd%20Nezahualc%C3%B3yotl%2C%20M%C3%A9x.!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fc102384a7e9%3A0x66c8f6e0766287c7!2sCd%20Nezahualc%C3%B3yotl%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1721590000000!5m2!1ses-419!2smx" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: 'var(--radius-md)' }} 
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
