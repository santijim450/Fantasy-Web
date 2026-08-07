import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Home() {
  useScrollReveal();

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-base">
        <video 
          autoPlay={true} 
          loop={true} 
          muted={true} 
          playsInline={true} 
          className="hero-video"
          poster="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        >
          <source src="/promo.mp4" type="video/mp4" />
          <source src="/promo.mov" type="video/quicktime" />
          Tu navegador no soporta videos HTML5.
        </video>

        <div className="container hero-content reveal">
          <span className="subtitle-caps reveal reveal-delay-1" style={{ color: 'var(--color-surface)' }}>Jardín de Eventos</span>
          <h1 className="title-hero">
            Fantasy
          </h1>
          <div className="reveal reveal-delay-2" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2rem' }}>
            <Link to="/salon" className="btn-minimal" style={{ color: 'var(--color-surface)', borderColor: 'var(--color-surface)' }}>Descubrir el Recinto</Link>
            <Link to="/contacto" className="btn-minimal" style={{ color: 'var(--color-surface)', borderColor: 'var(--color-surface)' }}>Agendar Visita</Link>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="section bg-surface">
        <div className="container text-center reveal">
          <p className="text-intro">
            "No es solo un lugar, es el lienzo donde se pintan los mejores recuerdos de tu vida."
          </p>
        </div>
      </section>

      {/* Asymmetric Grid (Collections & Venue) */}
      <section className="section">
        <div className="container">
          <div className="grid-vivre">
            
            {/* Item 1 */}
            <div className="grid-vivre-item reveal">
              <div className="grid-vivre-img-container">
                <Link to="/colecciones" className="img-wrap">
                  <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Decoración de lujo" className="grid-vivre-img" />
                </Link>
              </div>
              <div style={{ padding: '0 2rem' }}>
                <span className="subtitle-caps">01 / Diseño</span>
                <h3 className="title-massive" style={{ marginBottom: '1rem' }}>Colecciones</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.125rem' }}>
                  Diseños a la medida que se adaptan a la magnitud de tus sueños. Cada arreglo florar y cada montaje está pensado para deslumbrar y contar una historia única.
                </p>
                <Link to="/colecciones" className="btn-minimal">Ver Colecciones</Link>
              </div>
            </div>

            {/* Item 2 (Reversed) */}
            <div className="grid-vivre-item reverse reveal">
              <div className="grid-vivre-img-container">
                <Link to="/salon" className="img-wrap">
                  <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Recinto principal" className="grid-vivre-img" />
                </Link>
              </div>
              <div style={{ padding: '0 2rem' }}>
                <span className="subtitle-caps">02 / Arquitectura</span>
                <h3 className="title-massive" style={{ marginBottom: '1rem' }}>El Recinto</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.125rem' }}>
                  Espacios versátiles rodeados de naturaleza vibrante, perfectos tanto para ceremonias íntimas como para majestuosas recepciones al aire libre.
                </p>
                <Link to="/salon" className="btn-minimal">Conocer Más</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section bg-surface">
        <div className="container">
          <div className="reveal" style={{ marginBottom: '6rem' }}>
            <span className="subtitle-caps">Filosofía</span>
            <h2 className="title-massive">Nuestros Pilares</h2>
          </div>
          
          <ul className="list-luxury reveal">
            <li className="list-luxury-item">
              <span className="list-luxury-num">01</span>
              <h3 className="list-luxury-title">Alta Gastronomía</h3>
              <Link to="/servicios" className="list-luxury-link">Explorar</Link>
            </li>
            <li className="list-luxury-item">
              <span className="list-luxury-num">02</span>
              <h3 className="list-luxury-title">Atención Premium</h3>
              <Link to="/servicios" className="list-luxury-link">Explorar</Link>
            </li>
            <li className="list-luxury-item">
              <span className="list-luxury-num">03</span>
              <h3 className="list-luxury-title">Ubicación Privilegiada</h3>
              <Link to="/contacto" className="list-luxury-link">Ubicación</Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
