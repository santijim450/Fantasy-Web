import { useScrollReveal } from '../hooks/useScrollReveal';

function Footer() {
  useScrollReveal();

  return (
    <footer className="footer" style={{ paddingBottom: 0 }}>
      <div className="container">
        {/* Distributed Columns */}
        <div className="footer-grid reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '3rem', marginBottom: '6rem' }}>
          <div style={{ flex: '1 1 250px' }}>
            <h3 className="subtitle-caps" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem', opacity: 0 }}>Acerca</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem', maxWidth: '300px', marginBottom: '2rem' }}>
              Haciendo tus momentos especiales verdaderamente inolvidables. Diseño premium para eventos únicos.
            </p>
            <a href="/contacto" className="btn-minimal" style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)', padding: '0.8rem 2rem' }}>Agendar Visita</a>
          </div>
          
          <div style={{ flex: '1 1 200px' }}>
            <h3 className="subtitle-caps" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>Explorar</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem' }}>
                <a href="/" className="footer-link"><span className="hover-text-up" data-text="Inicio"><span>Inicio</span></span></a>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <a href="/salon" className="footer-link"><span className="hover-text-up" data-text="El Recinto"><span>El Recinto</span></span></a>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <a href="/colecciones" className="footer-link"><span className="hover-text-up" data-text="Colecciones"><span>Colecciones</span></span></a>
              </li>
            </ul>
          </div>
          
          <div style={{ flex: '1 1 250px' }}>
            <h3 className="subtitle-caps" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>Contacto</h3>
            <ul style={{ listStyle: 'none', color: 'rgba(255,255,255,0.7)', padding: 0, marginBottom: '2rem' }}>
              <li style={{ marginBottom: '0.8rem', lineHeight: '1.4' }}>Calle, S. Rafael N. 254,<br />Vicente Villada, 57710<br />Cdad. Nezahualcóyotl, Méx.</li>
              <li>
                <a href="https://wa.me/525536073700" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  <span className="hover-text-up" data-text="55 3607 3700"><span>55 3607 3700</span></span>
                </a>
              </li>
            </ul>
            
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '1.5rem', color: '#ffffff', alignItems: 'center' }}>
              <a href="https://www.facebook.com/share/1EPoEFz1Hc/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.8, transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.8, transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.36.88.4.4.66.8.88 1.36.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.88 1.36-.4.4-.8.66-1.36.88-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41-.56-.22-.96-.48-1.36-.88-.4-.4-.66-.8-.88-1.36-.16-.42-.36-1.05-.41-2.22-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.88-1.36.4-.4.8-.66 1.36-.88.42-.16 1.05-.36 2.22-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.77.13 4.9.33 4.14.63c-.8.3-1.47.73-2.13 1.39C1.34 2.68.9 3.35.6 4.15.3 4.9.1 5.77.05 7.05 0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.25 2.15.55 2.9.3.8.73 1.47 1.39 2.13.66.66 1.33 1.1 2.13 1.4.76.3 1.63.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.25 2.91-.55.8-.3 1.47-.73 2.13-1.39.66-.66 1.1-1.33 1.4-2.13.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.25-2.15-.56-2.91-.3-.8-.73-1.47-1.4-2.13-.66-.66-1.33-1.1-2.13-1.4-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm3.98-9.02a1.44 1.44 0 1 1 2.88 0 1.44 1.44 0 0 1-2.88 0z" />
                </svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.8, transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.63-.61 3.2-1.72 4.38-1.24 1.34-3.1 2.05-4.96 1.94-1.84-.1-3.56-1.04-4.66-2.52-1.05-1.39-1.42-3.17-1.07-4.87.35-1.74 1.47-3.23 2.97-4.14 1.42-.87 3.12-1.17 4.75-1.02V13.1c-.81-.13-1.64-.09-2.42.17-.92.31-1.71.95-2.18 1.8-.45.81-.6 1.79-.42 2.7.2 1.01.8 1.9 1.62 2.45.92.61 2.08.76 3.14.54 1.33-.28 2.43-1.16 2.94-2.42.27-.67.4-1.41.4-2.15V.02h-2.51z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom reveal reveal-delay-1" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', paddingBottom: '4rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
          <span>&copy; {new Date().getFullYear()} Fantasy Jardín de Eventos.</span>
          <span>Todos los derechos reservados.</span>
        </div>
      </div>

      {/* Massive Title with Video Mask at the very bottom */}
      <div className="reveal reveal-delay-2" style={{ position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <video 
          autoPlay={true} loop={true} muted={true} playsInline={true} 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/promo.mp4" type="video/mp4" />
          <source src="/promo.mov" type="video/quicktime" />
        </video>
        
        <div style={{ position: 'relative', backgroundColor: 'var(--color-text)', mixBlendMode: 'darken', padding: '2rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 className="title-massive" style={{ fontSize: 'clamp(3rem, 15vw, 15rem)', lineHeight: '0.9', margin: 0, color: '#ffffff' }}>
            FANTASY
          </h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
