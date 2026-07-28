import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-base">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video"
          poster="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        >
          {/* Video promocional del cliente */}
          <source src="/promo.mov" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>

        <div className="hero-content">
          <h1 className="hero-title" style={{ fontSize: '4.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Get into the new
          </h1>
          <p className="hero-subtitle" style={{ fontSize: '1.5rem', fontWeight: '300' }}>
            Descubre la magia de tus eventos en el salón más exclusivo. 
            Paquetes infantiles, sociales y empresariales.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/salon" className="btn btn-primary">Conoce el Salón</Link>
            <Link to="/mesas" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>Ver Paquetes</Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem', fontSize: '2.5rem' }}>¿Por qué elegirnos?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-panel hover-scale">
              <h3 style={{ color: 'var(--color-primary)' }}>🎈 Espacios Mágicos</h3>
              <p>Instalaciones de primera calidad diseñadas para la diversión y comodidad de todos tus invitados, grandes y pequeños.</p>
            </div>
            <div className="glass-panel hover-scale">
              <h3 style={{ color: 'var(--color-success)' }}>🍽️ Gastronomía Premium</h3>
              <p>Ofrecemos los mejores menús y bufets para deleitar a tus asistentes, con opciones para todos los gustos.</p>
            </div>
            <div className="glass-panel hover-scale">
              <h3 style={{ color: 'var(--color-accent)' }}>✨ Paquetes Todo Incluido</h3>
              <p>Despreocúpate de la organización. Nosotros nos encargamos de las mesas, decoración, comida y entretenimiento.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
