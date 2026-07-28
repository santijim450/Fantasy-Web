import { Link } from 'react-router-dom';

function Servicios() {
  return (
    <div style={{ paddingTop: '80px', backgroundColor: 'var(--color-bg)' }}>
      {/* Header */}
      <section className="section text-center" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-accent)', padding: '6rem 2rem' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--color-gold)' }}>Nuestros Servicios</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)' }}>
            Atención al detalle en cada aspecto de tu celebración para garantizar un evento impecable.
          </p>
        </div>
      </section>

      {/* Servicios Detallados */}
      <section className="section" style={{ padding: '6rem 2rem' }}>
        <div className="container">
          
          {/* Banquetería */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem', marginBottom: '6rem' }}>
            <div style={{ flex: '1 1 400px' }}>
              <img src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Banquete elegante" style={{ width: '100%', borderRadius: '4px', boxShadow: 'var(--shadow-lg)' }} />
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>Alta Gastronomía</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Nuestra propuesta culinaria está diseñada por chefs de renombre. Ofrecemos menús de 3 a 5 tiempos, bufets internacionales, barras de postres artesanales y mixología de autor. Adaptamos cada platillo para crear una experiencia sensorial única para ti y tus invitados.
              </p>
              <ul style={{ color: 'var(--color-text)', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>✨ Menús de degustación previos</li>
                <li style={{ marginBottom: '0.5rem' }}>✨ Opciones veganas y sin gluten</li>
                <li style={{ marginBottom: '0.5rem' }}>✨ Mixología y Coctelería de Bienvenida</li>
              </ul>
            </div>
          </div>

          {/* Decoración */}
          <div style={{ display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', gap: '4rem', marginBottom: '6rem' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>Diseño y Ambientación</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Transformamos el espacio para reflejar tu visión. Desde arreglos florales exóticos hasta mobiliario vintage o imperial. Nuestra iluminación arquitectónica resalta la majestuosidad del jardín, creando atmósferas románticas al caer la noche.
              </p>
              <ul style={{ color: 'var(--color-text)', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>✨ Arte floral personalizado</li>
                <li style={{ marginBottom: '0.5rem' }}>✨ Mobiliario de diseñador</li>
                <li style={{ marginBottom: '0.5rem' }}>✨ Iluminación cálida y arquitectónica</li>
              </ul>
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Decoración floral" style={{ width: '100%', borderRadius: '4px', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>

          {/* Entretenimiento */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
            <div style={{ flex: '1 1 400px' }}>
              <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Entretenimiento" style={{ width: '100%', borderRadius: '4px', boxShadow: 'var(--shadow-lg)' }} />
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>Entretenimiento Premium</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                El ambiente lo es todo. Contamos con alianzas con orquestas sinfónicas, grupos versátiles de alto impacto, DJs reconocidos y ensambles clásicos para ceremonias. Garantizamos una acústica perfecta y pistas de baile espectaculares.
              </p>
              <ul style={{ color: 'var(--color-text)', listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>✨ Orquestas y música en vivo</li>
                <li style={{ marginBottom: '0.5rem' }}>✨ Pistas de baile iluminadas o de cristal</li>
                <li style={{ marginBottom: '0.5rem' }}>✨ Shows de pirotecnia en frío</li>
              </ul>
              <Link to="/colecciones" className="btn btn-primary hover-scale">Ver Nuestras Colecciones</Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Servicios;
