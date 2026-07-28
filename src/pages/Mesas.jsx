function Mesas() {
  const paquetes = [
    {
      id: 1,
      titulo: 'Paquete Básico',
      precio: 'Desde $5,000 MXN',
      color: 'var(--color-secondary)',
      caracteristicas: ['Renta del salón por 5 horas', 'Mesas y sillas para 50 personas', 'Mantelería básica', 'Música ambiental']
    },
    {
      id: 2,
      titulo: 'Paquete Premium',
      precio: 'Desde $12,000 MXN',
      color: 'var(--color-primary)',
      caracteristicas: ['Renta por 6 horas', 'Mesas y sillas tiffany para 100 personas', 'Decoración con globos', 'Banquetes (2 tiempos)', 'Sonido profesional']
    },
    {
      id: 3,
      titulo: 'Paquete VIP',
      precio: 'Desde $20,000 MXN',
      color: 'var(--color-gold)',
      caracteristicas: ['Renta por 7 horas', 'Decoración temática completa', 'Mesas imperiales', 'Banquetes (3 tiempos)', 'Animador y DJ', 'Pastel y mesa de dulces']
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="hero-base" style={{ minHeight: '40vh', backgroundImage: "url('https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="hero-content">
          <h1 className="hero-title" style={{ fontSize: '3rem' }}>Paquetes y Mesas</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Selecciona tu Paquete Ideal</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Nos adaptamos a tu presupuesto y necesidades para que tu fiesta sea perfecta.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {paquetes.map(paquete => (
              <div key={paquete.id} className="glass-panel hover-scale" style={{ borderTop: `5px solid ${paquete.color}`, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ color: paquete.color, fontSize: '1.75rem', marginBottom: '0.5rem' }}>{paquete.titulo}</h3>
                <div style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--color-dark)' }}>
                  {paquete.precio}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, flex: 1 }}>
                  {paquete.caracteristicas.map((caracteristica, i) => (
                    <li key={i} style={{ padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                      ✓ {caracteristica}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary" style={{ marginTop: '2rem', width: '100%', backgroundColor: paquete.color, backgroundImage: 'none' }}>
                  Cotizar ahora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mesas;
