import { Link } from 'react-router-dom';

function Mesas() {
  return (
    <div style={{ paddingTop: '80px', backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Header */}
      <section className="hero-base" style={{ minHeight: '40vh', background: 'var(--color-bg)' }}>
        <div className="hero-content reveal">
          <span className="subtitle-caps">Diseño a Medida</span>
          <h1 className="title-massive" style={{ color: 'var(--color-text)' }}>
            Colecciones
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', maxWidth: '600px', margin: '2rem auto 0' }}>
            Eventos de ensueño. Nos hacemos cargo de la organización, amenización y desarrollo de tu evento con la máxima elegancia.
          </p>
        </div>
      </section>

      {/* Pricing Columns - Sociales */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
            
            {/* Paquete 1 */}
            <div className="reveal" style={{ padding: '2rem 0', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
              <span className="subtitle-caps">Esencial</span>
              <h3 className="title-massive" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Plata</h3>
              <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text)', marginBottom: '2rem' }}>
                $437<span style={{ fontSize: '0.875rem', fontFamily: 'var(--font-sans)', color: 'var(--color-text-muted)', marginLeft: '0.5rem' }}>/invitado</span>
              </div>
              <ul className="list-luxury" style={{ padding: 0, marginBottom: '3rem' }}>
                <li style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>Servicio de salón por 6 horas</li>
                <li style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>Comida en 2 tiempos a elegir</li>
                <li style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>Batucada de bienvenida y cierre</li>
                <li style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>Amenización musical en comida</li>
                <li style={{ padding: '1rem 0' }}>Bar Service, refresco y hielo libre</li>
              </ul>
              <Link to="/contacto" className="view-all-container">Agendar Cita <span className="view-all__arrow">↗</span></Link>
            </div>

            {/* Paquete 2 */}
            <div className="reveal reveal-delay-1" style={{ padding: '2rem 0', borderTop: '2px solid var(--color-primary)' }}>
              <span className="subtitle-caps" style={{ color: 'var(--color-primary)' }}>Experiencia 360</span>
              <h3 className="title-massive" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Oro</h3>
              <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text)', marginBottom: '2rem' }}>
                $545<span style={{ fontSize: '0.875rem', fontFamily: 'var(--font-sans)', color: 'var(--color-text-muted)', marginLeft: '0.5rem' }}>/invitado</span>
              </div>
              <ul className="list-luxury" style={{ padding: 0, marginBottom: '3rem' }}>
                <li style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>Servicio de salón por 7 horas</li>
                <li style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>Menú 3 tiempos o Taquiza/Parrillada</li>
                <li style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>Servicio cámara 360 (2 hrs)</li>
                <li style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>Álbum digital en USB</li>
                <li style={{ padding: '1rem 0' }}>Batucada, DJ y pista iluminada</li>
              </ul>
              <Link to="/contacto" className="view-all-container">Agendar Cita <span className="view-all__arrow">↗</span></Link>
            </div>

            {/* Paquete 3 */}
            <div className="reveal reveal-delay-2" style={{ padding: '2rem 0', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
              <span className="subtitle-caps">Sin Concesiones</span>
              <h3 className="title-massive" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Diamante</h3>
              <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text)', marginBottom: '2rem' }}>
                $700<span style={{ fontSize: '0.875rem', fontFamily: 'var(--font-sans)', color: 'var(--color-text-muted)', marginLeft: '0.5rem' }}>/invitado</span>
              </div>
              <ul className="list-luxury" style={{ padding: 0, marginBottom: '3rem' }}>
                <li style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>Servicio de salón por 8 horas</li>
                <li style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>Menú 3 tiempos o Taquiza/Parrillada</li>
                <li style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>Grupo versátil (2 hrs)</li>
                <li style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>Tornamesa de chilaquiles o pozole</li>
                <li style={{ padding: '1rem 0' }}>Cámara 360 y Álbum impreso</li>
              </ul>
              <Link to="/contacto" className="view-all-container">Agendar Cita <span className="view-all__arrow">↗</span></Link>
            </div>

          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="container">
        <div className="line-separator reveal"></div>
      </div>

      {/* Infantiles */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="subtitle-caps">Diversión sin fin</span>
            <h2 className="title-massive" style={{ fontSize: '4rem' }}>Paquetes Infantiles</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', maxWidth: '600px', margin: '2rem auto 0' }}>
              El apartado del salón es con $2,500. <br />
              Servicio especial L-V por $256 p/p (6 hrs, juegos y batucada).
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            {/* Basico */}
            <div className="reveal" style={{ padding: '2rem', background: 'var(--color-surface)', borderRadius: 'var(--radius-sm)', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
              <span className="subtitle-caps">01</span>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Básico</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', minHeight: '48px' }}>Servicio de salón incluyendo niños mayores de 3 años.</p>
              <div style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>$359<span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>/inv</span></div>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.875rem', color: 'var(--color-text)' }}>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>Comida de 2 tiempos</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>Menú infantil a escoger</li>
                <li style={{ padding: '0.5rem 0' }}>Refresco, hielo y agua</li>
              </ul>
            </div>

            {/* Descanses */}
            <div className="reveal reveal-delay-1" style={{ padding: '2rem', background: 'var(--color-surface)', borderRadius: 'var(--radius-sm)', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
              <span className="subtitle-caps">02</span>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Descanses</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', minHeight: '48px' }}>Servicio de salón completo para tus invitados.</p>
              <div style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>$383<span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>/inv</span></div>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.875rem', color: 'var(--color-text)' }}>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>Buffet infantil</li>
                <li style={{ padding: '0.5rem 0' }}>Taquiza o parrillada (5 platillos y 3 guarniciones)</li>
              </ul>
            </div>

            {/* Sorprendas */}
            <div className="reveal reveal-delay-2" style={{ padding: '2rem', background: 'var(--color-surface)', borderRadius: 'var(--radius-sm)', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
              <span className="subtitle-caps">03</span>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Sorprendas</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', minHeight: '48px' }}>¡La diversión sube de nivel con espectáculos!</p>
              <div style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>$456<span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>/inv</span></div>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.875rem', color: 'var(--color-text)' }}>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>Incluye paquete Descanses</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>Piñata con dulces y regalos</li>
                <li style={{ padding: '0.5rem 0' }}>Espectacular show Fantasy</li>
              </ul>
            </div>

            {/* Especial */}
            <div className="reveal" style={{ padding: '2rem', background: 'var(--color-surface)', borderRadius: 'var(--radius-sm)', borderTop: '2px solid var(--color-primary)' }}>
              <span className="subtitle-caps" style={{ color: 'var(--color-primary)' }}>04 - Premium</span>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Especial</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', minHeight: '48px' }}>La experiencia completa e inolvidable para niños y adultos.</p>
              <div style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>$576<span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>/inv</span></div>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.875rem', color: 'var(--color-text)' }}>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>Incluye paquete Sorprendas</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>Video USB con reseña</li>
                <li style={{ padding: '0.5rem 0' }}>Mesa de dulces selecta</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Mesas;
