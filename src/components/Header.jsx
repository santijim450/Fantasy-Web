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
          </li>
          <li>
            <Link to="/mesas" className={`nav-link ${location.pathname === '/mesas' ? 'active' : ''}`}>
              Mesas y Paquetes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
