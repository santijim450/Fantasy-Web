import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}>
        
        {/* Left: Logo */}
        <div style={{ justifySelf: 'start' }}>
          <Link to="/" className="navbar-logo hover-scale" style={{ fontFamily: 'var(--font-serif)', color: 'inherit', textDecoration: 'none' }}>
            Fantasy
          </Link>
        </div>

        {/* Center: Links */}
        <ul className="nav-links" style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0, justifySelf: 'center' }}>
          <li>
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <span className="hover-text-up" data-text="Inicio"><span>Inicio</span></span>
            </Link>
          </li>
          <li>
            <Link to="/salon" className={`nav-link ${location.pathname === '/salon' ? 'active' : ''}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <span className="hover-text-up" data-text="El Recinto"><span>El Recinto</span></span>
            </Link>
          </li>
          <li>
            <Link to="/servicios" className={`nav-link ${location.pathname === '/servicios' ? 'active' : ''}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <span className="hover-text-up" data-text="Servicios"><span>Servicios</span></span>
            </Link>
          </li>
          <li>
            <Link to="/colecciones" className={`nav-link ${location.pathname === '/colecciones' ? 'active' : ''}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <span className="hover-text-up" data-text="Colecciones"><span>Colecciones</span></span>
            </Link>
          </li>
        </ul>

        {/* Right: Button */}
        <div style={{ justifySelf: 'end' }}>
          <a href="https://wa.me/525536073700" target="_blank" rel="noopener noreferrer" className="btn-whatsapp-outline">
            <span className="hover-text-up" data-text="Hablemos ↗"><span>Hablemos ↗</span></span>
          </a>
        </div>
        
      </div>
    </nav>
  );
}

export default Header;
