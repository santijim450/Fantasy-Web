import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

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
          {/* Video promocional convertido a MP4 para compatibilidad universal */}
          <source src="/promo.mp4" type="video/mp4" />
          <source src="/promo.mov" type="video/quicktime" />
          Tu navegador no soporta videos HTML5.
        </video>

        <div className="hero-content">
          <h1 className="hero-title" style={{ fontSize: '4.5rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Donde la Naturaleza y la Elegancia se Encuentran
          </h1>
          <p className="hero-subtitle" style={{ fontSize: '1.2rem', fontWeight: '300', fontStyle: 'italic', letterSpacing: '1px' }}>
            El escenario perfecto para bodas de ensueño, aniversarios y eventos de alto nivel en un jardín espectacular.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/mesas" className="btn btn-primary hover-scale">Cotizar Evento</Link>
            <Link to="/salon" className="btn btn-outline hover-scale">Visita Virtual</Link>
          </div>
        </div>
      </section>

      {/* Galería / Carrusel de Imágenes */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-bg)' }}>
        <div className="container text-center">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary-dark)' }}>
            Descubre la Majestuosidad
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 4rem auto', fontSize: '1.1rem' }}>
            Recorre nuestros exclusivos rincones diseñados para hacer de tu recepción una experiencia verdaderamente inolvidable.
          </p>

          <div style={{ paddingBottom: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <Swiper
              modules={[Autoplay, EffectFade, Navigation, Pagination]}
              effect={'fade'}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              style={{
                '--swiper-navigation-color': 'var(--color-gold)',
                '--swiper-pagination-color': 'var(--color-gold)',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              {[
                "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              ].map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img 
                    src={src} 
                    alt={`Vista del jardín ${idx + 1}`}
                    style={{
                      width: '100%',
                      height: '60vh',
                      minHeight: '450px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>Servicios de Autor</h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
              Nos encargamos de cada detalle con la máxima sofisticación y excelencia.
            </p>
          </div>
          
          <div className="grid" style={{ gap: '3rem' }}>
            <div className="card text-center hover-scale" style={{ padding: '3rem 2rem', border: '1px solid var(--color-accent)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-gold)' }}>✨</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem' }}>Banquetes de Alta Cocina</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Menús diseñados por chefs reconocidos, ofreciendo una experiencia gastronómica inigualable a tus invitados.</p>
            </div>
            
            <div className="card text-center hover-scale" style={{ padding: '3rem 2rem', border: '1px solid var(--color-accent)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-gold)' }}>🌿</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem' }}>Jardines Exclusivos</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Amplias áreas verdes con iluminación arquitectónica, perfectas para recepciones nocturnas al aire libre.</p>
            </div>
            
            <div className="card text-center hover-scale" style={{ padding: '3rem 2rem', border: '1px solid var(--color-accent)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-gold)' }}>🥂</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem' }}>Atención Personalizada</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Coordinadores de eventos dedicados para asegurar que tu día especial transcurra con absoluta perfección.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
