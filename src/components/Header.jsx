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
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo hover-scale">
          ✨ Fantasy
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/salon" className={`nav-link ${location.pathname === '/salon' ? 'active' : ''}`}>
              El Recinto
            </Link>
          </li>
          <li>
            <Link to="/servicios" className={`nav-link ${location.pathname === '/servicios' ? 'active' : ''}`}>
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/colecciones" className={`nav-link ${location.pathname === '/colecciones' ? 'active' : ''}`}>
              Colecciones
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="btn btn-primary" style={{ padding: '8px 20px', marginLeft: '10px' }}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
