import { Link } from 'react-router-dom';

function Servicios() {
  return (
    <div style={{ paddingTop: '80px', backgroundColor: 'var(--color-bg)' }}>
      {/* Header */}
      <section className="hero-base" style={{ minHeight: '50vh', background: 'var(--color-surface)' }}>
        <div className="hero-content reveal">
          <span className="subtitle-caps">Experiencia</span>
          <h1 className="title-massive">Nuestros Servicios</h1>
          <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '2rem auto 0', color: 'var(--color-text-muted)' }}>
            Atención al detalle en cada aspecto de tu celebración para garantizar un evento impecable.
          </p>
        </div>
      </section>

      {/* Servicios Detallados */}
      <section className="section">
        <div className="container">
          <div className="grid-vivre">
            
            {/* Banquetería */}
            <div className="grid-vivre-item reveal">
              <div className="grid-vivre-img-container">
                <div className="img-wrap">
                  <img src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Banquete elegante" className="grid-vivre-img" />
                </div>
              </div>
              <div style={{ padding: '0 2rem' }}>
                <span className="subtitle-caps">01 / Gastronomía</span>
                <h2 className="title-massive" style={{ marginBottom: '1rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Alta Gastronomía</h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.125rem' }}>
                  El sabor de celebrar. Cada platillo es una experiencia diseñada para deleitar a tus invitados, con opciones que van desde menús formales hasta estaciones interactivas.
                </p>
                <ul className="list-luxury" style={{ marginTop: '2rem', padding: 0 }}>
                  <li style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                    <strong>Menú a Tiempos:</strong> Sopa Milpa, Pechuga Cordon Blue y variedad de salseados (BBQ, Nuez, Champiñón, Chipotle, 3 Chiles).
                  </li>
                  <li style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                    <strong>Taquiza Tradicional:</strong> Más de 30 guisados a elegir (Pollo, Res, Cerdo y Vegetariano) con arroces y guarniciones clásicas.
                  </li>
                  <li style={{ padding: '1rem 0' }}>
                    <strong>Parrillada al Momento:</strong> Cortes jugosos, choriqueso, alambres y fajitas asadas al instante para tus invitados.
                  </li>
                </ul>
              </div>
            </div>

            {/* Decoración */}
            <div className="grid-vivre-item reverse reveal">
              <div className="grid-vivre-img-container">
                <div className="img-wrap">
                  <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Decoración floral" className="grid-vivre-img" />
                </div>
              </div>
              <div style={{ padding: '0 2rem' }}>
                <span className="subtitle-caps">02 / Ambientación</span>
                <h2 className="title-massive" style={{ marginBottom: '1rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Diseño y Estilo</h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.125rem' }}>
                  Transformamos el espacio para reflejar tu visión. Desde arreglos florales exóticos hasta mobiliario vintage o imperial. Nuestra iluminación arquitectónica resalta la majestuosidad del jardín, creando atmósferas románticas al caer la noche.
                </p>
                <ul className="list-luxury" style={{ marginTop: '2rem', padding: 0 }}>
                  <li style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>Arte floral personalizado</li>
                  <li style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>Mobiliario de diseñador</li>
                  <li style={{ padding: '1rem 0' }}>Iluminación cálida y arquitectónica</li>
                </ul>
              </div>
            </div>

            {/* Entretenimiento */}
            <div className="grid-vivre-item reveal">
              <div className="grid-vivre-img-container">
                <div className="img-wrap">
                  <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Entretenimiento" className="grid-vivre-img" />
                </div>
              </div>
              <div style={{ padding: '0 2rem' }}>
                <span className="subtitle-caps">03 / Experiencia</span>
                <h2 className="title-massive" style={{ marginBottom: '1rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Entretenimiento Premium</h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.125rem' }}>
                  El ambiente lo es todo. Contamos con alianzas con orquestas sinfónicas, grupos versátiles de alto impacto, DJs reconocidos y ensambles clásicos para ceremonias. Garantizamos una acústica perfecta y pistas de baile espectaculares.
                </p>
                <ul className="list-luxury" style={{ marginTop: '2rem', padding: 0, marginBottom: '3rem' }}>
                  <li style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>Orquestas y música en vivo</li>
                  <li style={{ padding: '1rem 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>Pistas de baile iluminadas o de cristal</li>
                  <li style={{ padding: '1rem 0' }}>Shows de pirotecnia en frío</li>
                </ul>
                <Link to="/colecciones" className="btn-minimal">Ver Colecciones</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Servicios;
