function Mesas() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Header */}
      <section className="section text-center" style={{ backgroundColor: 'var(--color-bg)', paddingBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>Colecciones Exclusivas</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          Diseñamos experiencias a la medida. Elige la colección que mejor se adapte a la magnitud y elegancia de tu evento.
        </p>
      </section>

      {/* Pricing Tables */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="grid" style={{ gap: '2rem' }}>
            
            {/* Paquete 1 */}
            <div className="card text-center hover-scale" style={{ padding: '3rem 2rem', border: '1px solid var(--color-accent)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-primary)' }}>Colección Plata</h3>
              <p style={{ color: 'var(--color-text-muted)', margin: '1rem 0 2rem' }}>Íntimo y Sofisticado</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-gold)', marginBottom: '2rem' }}>
                $1,200<span style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}>/invitado</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', textAlign: 'left', color: 'var(--color-text)' }}>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--color-accent)' }}>✓ Menú a 3 tiempos</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--color-accent)' }}>✓ Montaje clásico de lujo</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--color-accent)' }}>✓ Centros de mesa florales</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Descorche libre</li>
              </ul>
              <button className="btn btn-outline" style={{ width: '100%' }}>Agendar Cita</button>
            </div>

            {/* Paquete 2 */}
            <div className="card text-center hover-scale" style={{ padding: '3rem 2rem', background: 'var(--color-primary)', color: 'white', border: '1px solid var(--color-gold)' }}>
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-gold)', color: 'var(--color-primary-dark)', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                Más Solicitada
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-accent)' }}>Colección Oro</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', margin: '1rem 0 2rem' }}>La Experiencia Completa</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-accent)', marginBottom: '2rem' }}>
                $1,800<span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>/invitado</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', textAlign: 'left' }}>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>✓ Menú a 4 tiempos</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>✓ Montaje vintage o imperial</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>✓ Decoración floral premium</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>✓ Grupo musical versátil (5 hrs)</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Iluminación arquitectónica</li>
              </ul>
              <button className="btn btn-primary" style={{ width: '100%', background: 'var(--color-gold)', color: 'var(--color-primary-dark)', borderColor: 'var(--color-gold)' }}>Agendar Cita</button>
            </div>

            {/* Paquete 3 */}
            <div className="card text-center hover-scale" style={{ padding: '3rem 2rem', border: '1px solid var(--color-accent)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-primary)' }}>Colección Diamante</h3>
              <p style={{ color: 'var(--color-text-muted)', margin: '1rem 0 2rem' }}>Lujo sin Concesiones</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-gold)', marginBottom: '2rem' }}>
                $2,500<span style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}>/invitado</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', textAlign: 'left', color: 'var(--color-text)' }}>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--color-accent)' }}>✓ Menú de autor a 5 tiempos</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--color-accent)' }}>✓ Barra internacional (Cocktails)</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--color-accent)' }}>✓ Orquesta en vivo (6 hrs)</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--color-accent)' }}>✓ Pista iluminada de cristal</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Wedding Planner asignado</li>
              </ul>
              <button className="btn btn-outline" style={{ width: '100%' }}>Agendar Cita</button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Mesas;
